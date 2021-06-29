using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
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
      List<User> users = _context.Users.ToList();
      foreach(User u in users)
      {
        if(u.Email == user.Email && u.Password == user.Password)
        {
          var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SuperSecretKey@345"));
          var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

          var tokenOptions = new JwtSecurityToken(
                issuer: "https://localhost:5001",
                audience: "https://localhost:5001",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signingCredentials
            ) ;

          var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

          return Ok(new { Token = tokenString});

        }

      }
      return Unauthorized();
    }
  }
}
