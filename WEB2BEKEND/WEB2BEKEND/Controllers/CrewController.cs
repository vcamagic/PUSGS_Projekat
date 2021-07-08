using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
  public class CrewController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public CrewController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("GetCrew")]
    public ActionResult<IEnumerable<Crew>> GetCrew()
    {
      List<Crew> temp = new List<Crew>();
      foreach (var item in _context.CrewRequests)
      {
        if (item.Status == "valid")
        {
          temp.Add(item);
        }
      }
      return temp;
    }

    [HttpPost]
    [Route("AddCrew")]
    public async Task<ActionResult<Crew>> SaveCrew(Crew crew)
    {
      Crew crew1 = new Crew()
      {
        Name = crew.Name,
        Id = crew.Id,
        CrewMembers = crew.CrewMembers,
        Status = crew.Status

      };

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
      Notification notification = new Notification()
      {
        Type = "Success",
        Text = "Crew added!",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();



      _context.CrewRequests.Add(crew1);

      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCrew", crew1);

    }
    [HttpPut]
    [Route("DeleteCrew")]
    public async Task<ActionResult<Crew>> DeleteCrew(string id)
    {
      Crew c = new Crew();
      foreach (var item in _context.CrewRequests)
      {
        if (item.Id == id)
        {
          c = item;
          break;
        }
      }

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
      Notification notification = new Notification()
      {
        Type = "Warning",
        Text = "Crew deleted!",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();

      c.Status = "deleted";
      await _context.SaveChangesAsync();
      return CreatedAtAction("GetCrew", c);


    }
  }
}
