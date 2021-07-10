
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WEB2BEKEND.Data;
using WEB2BEKEND.Models;

namespace WEB2BEKEND.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
      private readonly DefaultConnection _context;

      public UsersController(DefaultConnection context)
      {
          _context = context;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<User>>> GetUsers()
      {
         return await _context.Users.ToListAsync();

      }

    [HttpGet("{email}")]
    public async Task<ActionResult<User>> GetIncidents(string email)
    {
      User u = await  _context.Users.SingleOrDefaultAsync(x => x.Email == email);

      if (u == null)
      {
        return NotFound();
      }

      return u;
    }

    [HttpGet]
    [Route("TeamMembers")]
    public ActionResult<IEnumerable<User>> GetTeamMembers()
    {
      List<User> memberUsers = new List<User>();
      foreach (var item in _context.Users)
      {
        if ((item.InputState == "Team member" || item.InputState == "Teammember") && item.ActiveStatus == "Accepted")
        {
          memberUsers.Add(item);
          Console.WriteLine(item.Username);
        }
      }
      return memberUsers;
    }

    [HttpGet("username")]
    [Route("CurrentUser")]
    public async Task<ActionResult<IEnumerable<User>>> GetCurrentUser(string username)
    {

      foreach (User user in _context.Users)
      {
        if (user.Username == username)
        {
          return Ok(user);
        }
      }

      return BadRequest("Wrong username");
    }

    [HttpPut]
    [Route("ChangeProfile")]
    public async Task<ActionResult<User>> ChangeProfile([FromBody] User userF)
    {
      if (ModelState.IsValid)
      {
        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;


        User u1 = new User();
        foreach (User user in _context.Users)
        {
          if (user.Username == username)
          {
            u1 = user;
            break;

          }
        }

        if (u1.InputState == null)
        {
          u1.InputState = "Worker";
        }

        if (u1.InputState.Equals(userF.InputState))
        {
          u1.Username = userF.Username;
          u1.FirstName = userF.FirstName;
          u1.LastName = userF.LastName;
          u1.Email = userF.Email;
          u1.Address = userF.Address;
          if (userF.Picture != null)
          {
            u1.Picture = userF.Picture;
          }

          await _context.SaveChangesAsync();
          return CreatedAtAction("ChangeProfile", u1);
        }
        else
        {
          u1.Username = userF.Username;
          u1.FirstName = userF.FirstName;
          u1.LastName = userF.LastName;
          u1.Email = userF.Email;
          u1.Address = userF.Address;
          UserRequest newRequest = new UserRequest
          {
            Username = userF.Username,
            FirstName = userF.FirstName,
            LastName = userF.LastName,
            Email = userF.Email,
            Address = userF.Address,
            BirthDate = userF.BirthDate,
            InputState = userF.InputState,
          };

          _context.UserRequests.Add(newRequest);

          await _context.SaveChangesAsync();
          return CreatedAtAction("ChangeProfile", u1);
        }
      }
      else
      {
        return BadRequest();
      }

    }


    [HttpPost]
    [Route("Register")]
    public async Task<ActionResult<User>> Register([FromBody] User userForm)
    {

      List<User> lista = new List<User>();
      foreach(var v in _context.Users.ToList())
      {
        lista.Add(v);
      }

      foreach(User juzer in lista.ToList())
      {
        if(juzer.Email == userForm.Email)
        {
          return BadRequest("User with this email already exists");
        }
        if (juzer.Username == userForm.Username)
        {
          return BadRequest("User with this username already exists");
        }
      }
      if (userForm == null)
      {
        return BadRequest("Invalid client request");
      }
      
      User user = userForm;
      string state = "";
      if (user.InputState == "Admin")
      {
        state = "Admin";
      }
      else
      {
        state = user.InputState;
      }
      _context.Users.Add(user);

      await _context.SaveChangesAsync();

     /* var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKeysdfsdfsdf"));
      var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);


      var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role,state)
            };

      var tokenOptions = new JwtSecurityToken(
          issuer: "https://localhost:5001",
          audience: "https://localhost:5001",
          claims: claims,
          expires: DateTime.Now.AddMinutes(60),
          signingCredentials: signingCredentials
          );

      var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

      CurrentUser loggedInUser = new CurrentUser
      {
        Token = tokenString,
        Username = user.Username,
        FirstName = user.FirstName,
        LastName = user.LastName
      };*/

      return Ok(user);

    }

    [HttpPost, Route("login")]
    public IActionResult Login([FromBody]User user)
    {
      if (user == null)
      {
        return BadRequest("Invalid client request.");
      }


      if(_context.Users.Any(x => x.Email == user.Email && x.Password == user.Password))
      {
        User u = _context.Users.SingleOrDefault(x => x.Email == user.Email);
        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
        var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name,u.Username),
            new Claim(ClaimTypes.Role, u.InputState)
        };

        var tokenOptions = new JwtSecurityToken(
              issuer: "https://localhost:5000",
              audience: "https://localhost:5000",
              claims: claims,
              expires: DateTime.Now.AddMinutes(60),
              signingCredentials: signingCredentials
          ) ;

        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

        CurrentUser loggedInUser = new CurrentUser
        {
          Token = tokenString,
          Username = u.Username,
          FirstName = u.FirstName,
          LastName = u.LastName,
          Type = u.InputState

        };


        return Ok(loggedInUser);

      }


      return Unauthorized();
    }

    [HttpPost, DisableRequestSizeLimit]
    [Route("Upload")]
    public IActionResult Upload()
    {
      try
      {
        var file = Request.Form.Files[0];
        var folderName = Path.Combine("Resources", "Images");
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        if (file.Length > 0)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var fullPath = Path.Combine(pathToSave, fileName);

          var dbPath = Path.Combine(folderName, fileName);
          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }
          return Ok(new { dbPath });
        }
        else
        {
          return BadRequest();
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }


    [HttpPut]
    [Route("ChangePassword")]
    public async Task<ActionResult<User>> ChangePassword([FromBody] Login passwordForm)
    {
      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      User u1 = new User();
      foreach (User user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          break;

        }
      }
      u1.Password = passwordForm.Password;

      //string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      Notification notification = new Notification()
      {
        Type = "Success",
        Text = "Password changed",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();
      return CreatedAtAction("ChangePassword", u1);

    }

    [HttpPut]
    [Route("Verification")]
    public async Task<ActionResult<User>> Verification(string username)
    {
      User u1 = new User();
      foreach (User user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          break;

        }
      }
      u1.ActiveStatus = "Accepted";
      await _context.SaveChangesAsync();
      sendEmail(u1.Email, "Accepted");
      return CreatedAtAction("GetUsers", u1);

    }
    [HttpPut]
    [Route("Declineverification")]
    public async Task<ActionResult<User>> Declineverification(string username)
    {
      User u1 = new User();
      foreach (User user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          break;

        }
      }
      u1.ActiveStatus = "Refused";
      await _context.SaveChangesAsync();
      sendEmail(u1.Email, "Refused");
      return CreatedAtAction("GetUsers", u1);

    }
    private void sendEmail(string email, string msg)
    {
      using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
      {
        client.EnableSsl = true;
        client.DeliveryMethod = SmtpDeliveryMethod.Network;
        client.UseDefaultCredentials = false;
        client.Credentials = new NetworkCredential("admirpusgs@gmail.com", "admirpusgs2021");
        MailMessage msgObj = new MailMessage();
        msgObj.To.Add(email);
        msgObj.From = new MailAddress("admirpusgs@gmail.com");
        msgObj.Subject = "Registration acceptance";
        msgObj.Body = "Your request for registration  has been " + msg;
        client.Send(msgObj);

      }
    }
  }
}
