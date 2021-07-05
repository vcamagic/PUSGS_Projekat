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
  public class ElementsController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public ElementsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Element>>> GetElements()
    {
      return await _context.Elements.ToListAsync();
    }


    [HttpPut]
    [Route("ChangeElement")]
    public async Task<ActionResult<Element>> ChangeElement(long id)
    {


      var element1 = _context.Elements.FirstOrDefault(n => n.Id == id);

      element1.InSafetyDocument = true;

      await _context.SaveChangesAsync();

      return CreatedAtAction("GetElements", element1);

    }
    [HttpPut]
    [Route("RemoveElement")]
    public async Task<ActionResult<Element>> RemoveElement(long id)
    {


      var element1 = _context.Elements.FirstOrDefault(n => n.Id == id);

      element1.InSafetyDocument = false;



      await _context.SaveChangesAsync();

      return CreatedAtAction("GetElements", element1);

    }
  }
}
