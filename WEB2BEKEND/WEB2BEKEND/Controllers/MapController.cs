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

    /*[HttpGet]
    public async Task<ActionResult<IEnumerable<MapModel>>> GetMap()
    {
      return await _context.Maps.ToListAsync();

    }*/

    [HttpGet]
    [Route("GetMap")]
    public ActionResult<IEnumerable<MapModel>> GetMap()
    {
      List<MapModel> temp = new List<MapModel>();
      List<MapModel> temp2 = new List<MapModel>();

      foreach (var item in _context.Maps)
      {
        temp.Add(item);
      }

      temp2 = temp.GroupBy(x => x.X).Select(x => x.First()).ToList();

      return temp2;
    }
  }
}
