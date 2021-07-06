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
  public class SafetyDocumentsController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public SafetyDocumentsController(DefaultConnection context)
    {
      _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SafetyDocument>>> GetSafetyDocuments()
    {
      return await _context.SafetyDocuments.ToListAsync();

    }
  }
}
  