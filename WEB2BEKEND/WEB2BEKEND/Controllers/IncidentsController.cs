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
  public class IncidentsController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public IncidentsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet/*,Authorize(Roles ="Admin, Worker, Team member")*/]
    public async Task<ActionResult<IEnumerable<Incident>>> GetIncidents()
    {
      _context.Incidents.Include(item => item.Elements).ToList();
      _context.Incidents.Include(item => item.Crew).ToList();
      _context.Incidents.Include(item => item.Call).ToList();
      _context.Incidents.Include(item => item.Resolutions).ToList();
      _context.Incidents.Include(item => item.Multimedia).ToList();
      Mapa();
      return await _context.Incidents.ToListAsync();

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Incident>> GetIncidents(int id)
    {
      var inc = await _context.Incidents.FindAsync(id);

      
      if (inc == null)
      {
        return NotFound();
      }

      return inc;
    }

    [HttpPost]
    [Route("AddIncident")]
    public async   Task<IActionResult> PostIncident(Incident incident)

    {
      _context.Incidents.Add(incident);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetIncidents", new { id = incident.Id }, incident);
    }

    [HttpPost("{id}/Devices")]
    public async Task<IActionResult> PostElementInIncident(int id,IncidentElement element)
    {
      _context.Incidents.Include(item => item.Elements).ToList();
      var incident = await _context.Incidents.FindAsync(id);

      if(incident == null)
      {
        return NotFound();
      }
      element.Id = 0;
      incident.Elements.Add(element);
      await _context.SaveChangesAsync();
      return NoContent();
    }

    [HttpPost("{id}/Resolutions")]
    public async Task<ActionResult<int>> PostResolutionInIncident (int id,IncidentResolution resolution)
    {
      _context.Incidents.Include(item => item.Resolutions).ToList();
      var incident = await _context.Incidents.FindAsync(id);

      if (incident == null)
      {
        return NotFound();
      }
      resolution.Id = 0;
      incident.Resolutions.Add(resolution);
      await _context.SaveChangesAsync();
      return resolution.Id;

    }

    [HttpPost("{id}/Calls")]
    public async Task<ActionResult<int>> PostCallInIncident(int id, IncidentCall call)
    {
      _context.Incidents.Include(item => item.Call).ToList();
      var incident = await _context.Incidents.FindAsync(id);

      if (incident == null)
      {
        return NotFound();
      }
      call.Id = 0;
      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
      Notification notification = new Notification()
      {
        Type = "Success",
        Text = "Call added!",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();


      incident.Call.Add(call);
      await _context.SaveChangesAsync();
      return NoContent();

    }

    [HttpPost("{id}/Crew")]
    public async Task<ActionResult<int>> PostCrewInIncident(int id, Crew crew)
    {
      var incident = await _context.Incidents.FindAsync(id);

      if (incident == null)
      {
        return NotFound();
      }
      Crew crewDb = await _context.CrewRequests.FindAsync(crew.Name);
      incident.Crew = crewDb;
      await _context.SaveChangesAsync();
      return NoContent();

    }

    [HttpPost("{id}/Multimedia")]
    public async Task<ActionResult<Multimedia>> PostMultimediaInIncident(int id,Multimedia multimedia)
    {
      _context.Incidents.Include(item => item.Multimedia).ToList();

      var incident = await _context.Incidents.FindAsync(id);
      if (incident == null)
      {
        return NotFound();
      }

      multimedia.Id = 0;
      incident.Multimedia.Add(multimedia);
      await _context.SaveChangesAsync();
      return multimedia;
    }

    public void Mapa()
    {
      List<MapModel> temp = new List<MapModel>();
      List<MapModel> temp2 = new List<MapModel>();

      MapModel mm = new MapModel();



      foreach (var item in _context.Maps)
      {
        temp.Add(item);
      }

      foreach (var inc in _context.Incidents)
      {
        mm.CrewName = inc.Crew.Name;
        mm.Id = Guid.NewGuid().ToString();
        mm.IncidentId = inc.Id;
        mm.X = inc.Elements.FirstOrDefault(x => x.Address.ToLower() == inc.Address.ToLower()).CoordinateX;
        mm.Y = inc.Elements.FirstOrDefault(x => x.Address.ToLower() == inc.Address.ToLower()).CoordinateY;

        if (mm.X.Length > 0 && mm.Y.Length > 0)
        {
          temp.Add(mm);
          _context.Add(mm);
        }
      }
    }

  }
}
