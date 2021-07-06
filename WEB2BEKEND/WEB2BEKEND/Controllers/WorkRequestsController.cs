using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Win32;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2BEKEND.Data;
using WEB2BEKEND.Models;

namespace WEB2BEKEND.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class WorkRequestsController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public WorkRequestsController(DefaultConnection context)
    {
      _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<WorkRequest>>> GetWorkRequests()
    {
      return await _context.WorkRequests.ToListAsync();

    }
    [HttpPut]
    [Route("Approve")]
    public async Task<ActionResult<WorkRequest>> Approve(string phoneNum)
    {
      WorkRequest worker = new WorkRequest();
        foreach(WorkRequest wr in _context.WorkRequests.ToList())
        {

        if (wr.PhoneNum == phoneNum)
          {

          worker = wr;

          _context.WorkRequests.Remove(wr);
          await _context.SaveChangesAsync();

          worker.Status = "Approve";

          _context.WorkRequests.Add(worker);

          await _context.SaveChangesAsync();

          HistoryModel hm = new HistoryModel();
          hm.Id = worker.Id;
          hm.ChangeBy = worker.CreatedByUser;
          hm.DateChange = DateTime.Now.ToString();

          _context.History.Add(hm);
          await _context.SaveChangesAsync();
        }
            
        }
      return CreatedAtAction("Approve", worker);
    }
    [HttpPut]
    [Route("Cancel")]
    public async Task<ActionResult<WorkRequest>> Cancel(string phoneNum)
    {
      WorkRequest worker = new WorkRequest();
      foreach (WorkRequest wr in _context.WorkRequests.ToList())
      {

        if (wr.PhoneNum == phoneNum)
        {

          worker = wr;

          _context.WorkRequests.Remove(wr);
          await _context.SaveChangesAsync();

          worker.Status = "Cancel";

          _context.WorkRequests.Add(worker);
          await _context.SaveChangesAsync();

          HistoryModel hm = new HistoryModel();
          hm.Id = worker.Id;
          hm.ChangeBy = worker.CreatedByUser;
          hm.Id = DateTime.Now.ToString();

          _context.History.Add(hm);
          await _context.SaveChangesAsync();
        }

      }
      return CreatedAtAction("Cancel", worker);
    }
    [HttpPost]
    [Route("AddWorkRequest")]
    public async Task<ActionResult<WorkRequest>> AddWorkRequest(WorkRequest wr)
    {


      WorkRequest workRequest = new WorkRequest()
      {
        Id = Guid.NewGuid().ToString(),
        Type = wr.Type,
        Status = wr.Status,
        Incident = wr.Incident,
        Street = wr.Street, //ne pise u spec sta je
        DateCreated = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
        CreatedByUser = wr.CreatedByUser,
        PhoneNum = wr.PhoneNum,
        StartDate = wr.StartDate,
        Details = wr.Details,
        Notes = wr.Notes,
        EndDate = wr.EndDate,
        Purpose = wr.Purpose,
        Company = wr.Company,
        History = wr.History,
        State = wr.State,
        Multimedia = wr.Multimedia,
        Equipment = wr.Equipment,


      };




      _context.WorkRequests.Add(workRequest);

      await _context.SaveChangesAsync();



      return CreatedAtAction("GetWorkRequests", workRequest);

    }
  }
}
