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
  public class DocumentController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public DocumentController(DefaultConnection context)
    {
      _context = context;
    }
    [HttpGet]
    [Route("GetHistory")]
    
    public async Task<ActionResult<IEnumerable<HistoryModel>>> GetHistory()
    {
      return await _context.History.ToListAsync();

    }
    [HttpGet]
    [Route("GetHistoryState")]
    public async Task<ActionResult<IEnumerable<HistoryModel>>> GetHistoryState(string id)
    {
      List<HistoryModel> ins = new List<HistoryModel>();

      foreach (HistoryModel i in _context.History)
      {
        if (i.DocumentId == id)
        {
          ins.Add(i);
        }
      }

      return ins;
    }

    [HttpPost]
    [Route("SaveHistoryState")]
    public async Task<ActionResult<HistoryModel>> SaveHistoryState(HistoryModel hisState)
    {
      HistoryModel ins = new HistoryModel
      {
        DocumentId = hisState.DocumentId,
        ChangeBy = hisState.ChangeBy,
        DateChange = DateTime.Now.ToString(),
        NewStatus = hisState.NewStatus
      };


      WorkRequest doc = new WorkRequest();
      foreach (WorkRequest swp in _context.WorkRequests)
      {
        if (swp.Id == hisState.DocumentId)
        {
          doc = swp;
          doc.Status = hisState.NewStatus;
          break;
        }
      }


      _context.History.Add(ins);


      await _context.SaveChangesAsync();

      return CreatedAtAction("SaveHistoryState", ins);

    }
  }
}
