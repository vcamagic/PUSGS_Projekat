using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

    [HttpGet,Authorize(Roles ="Admin, Worker, Team member")]
    public async Task<ActionResult<IEnumerable<Incident>>> GetIncidents()
    {
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
   
  }
}
