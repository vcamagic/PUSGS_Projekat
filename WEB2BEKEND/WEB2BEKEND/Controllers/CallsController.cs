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
  public class CallsController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public CallsController(DefaultConnection context)
    {
      _context = context;
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Call>>> GetCalls()
    {
      return await _context.Calls.ToListAsync();
    }

    // GET: api/Books/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Call>> GetCalls(int id)
    {
      var call = await _context.Calls.FindAsync(id);

      if (call == null)
      {
        return NotFound();
      }

      return call;
    }


    [HttpPost]
    [Route("AddCall")]
    public async Task<IActionResult> AddCall(Call call)
    {
      _context.Calls.Add(call);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCalls", new { id = call.Id }, call);
    }

  }
}
