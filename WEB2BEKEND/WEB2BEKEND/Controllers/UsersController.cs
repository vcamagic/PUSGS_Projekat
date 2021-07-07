
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
using System.Net.Http.Headers;
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

    [HttpPost]
    [Route("Register")]
    public async Task<ActionResult<User>> Register([FromBody] User userForm)
    {
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

        return Ok(new { Token = tokenString});

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
      //sendEmail(u1.Email, "Accepted");
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
      //sendEmail(u1.Email, "Refused");
      return CreatedAtAction("GetUsers", u1);

    }

  }
}
