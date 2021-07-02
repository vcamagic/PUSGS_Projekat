using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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


    [HttpPost]
    public async Task<IActionResult> PostCall(Call call)
    {
      _context.Calls.Add(call);
      await _context.SaveChangesAsync();

      return Ok();
    }

  }
}
