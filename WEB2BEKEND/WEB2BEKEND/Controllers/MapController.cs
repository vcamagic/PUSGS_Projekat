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
  public class MapController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public MapController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("GetMap")]
    public ActionResult<IEnumerable<MapModel>> GetMap()
    {
      MapModel mapModel = new MapModel();

      List<MapModel> maps = new List<MapModel>();
       foreach(Incident inc in _context.Incidents.ToList())
       {
        mapModel.Id = Guid.NewGuid().ToString();
        mapModel.IncidentId = inc.Id;

        foreach (Crew c in _context.CrewRequests.ToList())
        {
          mapModel.CrewName = c.Name;
        }

        foreach (Element e in _context.Elements.ToList())
        {
          if(e.Id == inc.Id)
          {
            mapModel.X = e.CoordinateX;
            mapModel.Y = e.CoordinateY;
            _context.Maps.Add(mapModel);
            maps.Add(mapModel);
          }
        }
        
       }
      return maps;
    }
  }
}
