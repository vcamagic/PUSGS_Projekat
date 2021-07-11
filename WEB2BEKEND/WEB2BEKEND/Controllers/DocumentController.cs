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
    public async Task<ActionResult<IEnumerable<HistoryModel>>> GetHistory()
    {
      return await _context.History.ToListAsync();

    }

    [HttpGet]
    [Route("GetHistoryWP")]
    public async Task<ActionResult<IEnumerable<HistoryModelWP>>> GetHistoryWP()
    {
      return await _context.HistoryWP.ToListAsync();

    }

    [HttpPut]
    [Route("SaveElement")]
    public async Task<ActionResult<Element>> SaveElement(string address)
    {
      List<WorkRequest> temp = new List<WorkRequest>();

      var element = _context.Elements.ToList().Find(x => x.Address.ToLower() == address.ToLower());

      Element element1 = new Element()
      {
        Address = element.Address,
        CoordinateX = element.CoordinateX,
        CoordinateY = element.CoordinateY,
        Type = element.Type,
        Name = element.Name  //name podesiti da racuna koji je po redu ELEMENT i prva tri slova tog el na osnovu tipa

      };

      foreach (var wr in _context.WorkRequests.ToList())
      {
        Convert.ToDateTime(wr.DateCreated);
        temp.Add(wr);
      }
      var workerR = GetLastAdded();

      workerR.Equipment = element1.Name;

      _context.WorkRequests.ToList().Remove(GetLastAdded());
      await _context.SaveChangesAsync();

      _context.WorkRequests.ToList().Add(workerR);
      await _context.SaveChangesAsync();



      return CreatedAtAction("GetElements", element1);

    }
    public WorkRequest GetLastAdded()
    {
      List<DateTime> addedTime = new List<DateTime>();
      DateTime lastAdded = new DateTime();
      List<WorkRequest> temp = new List<WorkRequest>();
      foreach (var wrr in _context.WorkRequests.ToList())
      {
        Convert.ToDateTime(wrr.DateCreated);
        temp.Add(wrr);

      }

      foreach(var item in temp.ToList())
      {
        addedTime.Add(Convert.ToDateTime(item.DateCreated));
      }
      lastAdded = addedTime.Max();
      DateTime lastA;
      WorkRequest wr = new WorkRequest();
      foreach(WorkRequest w in temp.ToList())
      {
        lastA = Convert.ToDateTime(w.DateCreated);
        if (lastA == lastAdded)
        {
          
          wr = w;
        }
      }

      return wr;
    }
  }
}
