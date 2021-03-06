using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WEB2BEKEND.Data;
using WEB2BEKEND.Models;

namespace WEB2BEKEND.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SettingsController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public SettingsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("GetStreets")]
    public async Task<ActionResult<IEnumerable<Street>>> GetStreets()
    {
      return await _context.Streets.ToListAsync();
    }

    [HttpPut]
    [Route("ChangePriority")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<Street>> ChangePriority(Street cp)
    {
      var street1 = new Street();
      bool success = false;

      char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

      foreach (Street street in _context.Streets)
      {
        if (street.Name == cp.Name)
        {
          street1 = _context.Streets.FirstOrDefault(s => s.Name == cp.Name);
          street1.cPriority = cp.cPriority;
          success = true;
          break;
        }
      }

      foreach (Street street in _context.Streets)
      {
        foreach (Consumer cons in _context.Consumers)
        {
          string consStreet = cons.Street.Split(separators, 2)[0].Trim();

          if (street.Name.Equals(consStreet))
          {
            cons.Priority = street.cPriority;
          }
        }
      }

      /*foreach (StreetModel street in _context.Streets)
      {
          foreach (Inciden cons in _context.Consumers)
          {
              string consStreet = cons.Street.Split(separators, 2)[0].Trim();

              if (street.Name.Equals(consStreet))
              {
                  cons.Priority = street.cPriority;
              }
          }
      }*/



      if (success)
      {
        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

        Notification notification = new Notification()
        {
          Type = "Info",
          Text = "Street priority change",
          Status = "Unread",
          TimeStamp = DateTime.Now.ToString(),
          User = _context.Users.FirstOrDefault(u => u.Username == username),
          Visible = true
        };

        _context.Notifications.Add(notification);

        await _context.SaveChangesAsync();
        return CreatedAtAction("ChangePriority", street1);
      }

      return BadRequest("Wrong street name");

    }

   
    

    
  }
}
