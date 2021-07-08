using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WEB2BEKEND.Data;
using WEB2BEKEND.Models;

namespace WEB2BEKEND.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class WorkPlanController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public WorkPlanController(DefaultConnection context)
    {
      _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<WorkPlan>>> GetWorkPlans()
    {
      return await _context.WorkPlans.ToListAsync();

    }

    [HttpPut]
    [Route("Approve")]
    public async Task<ActionResult<WorkPlan>> Approve(string phoneNum)
    {
      WorkPlan worker = new WorkPlan();
      foreach (WorkPlan wr in _context.WorkPlans.ToList())
      {

        if (wr.PhoneNum == phoneNum)
        {

          worker = wr;

          _context.WorkPlans.Remove(wr);
          await _context.SaveChangesAsync();

          worker.Status = "Approve";

          _context.WorkPlans.Add(worker);

          await _context.SaveChangesAsync();

          HistoryModelWP hm = new HistoryModelWP();
          hm.Id = worker.Id;
          hm.ChangeBy = worker.createdByUser;
          hm.DateChange = DateTime.Now.ToString();
          hm.NewStatus = worker.Status;
          _context.HistoryWP.Add(hm);
          await _context.SaveChangesAsync();


          string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
          Notification notification = new Notification()
          {
            Type = "Info",
            Text = "Work plan approved!",
            Status = "Unread",
            TimeStamp = DateTime.Now.ToString(),
            User = _context.Users.FirstOrDefault(u => u.Username == username),
            Visible = true
          };

        }

      }
      return CreatedAtAction("Approve", worker);
    }
    [HttpPut]
    [Route("Cancel")]
    public async Task<ActionResult<WorkPlan>> Cancel(string phoneNum)
    {
      WorkPlan worker = new WorkPlan();
      foreach (WorkPlan wr in _context.WorkPlans.ToList())
      {

        if (wr.PhoneNum == phoneNum)
        {

          worker = wr;

          _context.WorkPlans.Remove(wr);
          await _context.SaveChangesAsync();

          worker.Status = "Cancel";

          _context.WorkPlans.Add(worker);
          await _context.SaveChangesAsync();

          HistoryModelWP hm = new HistoryModelWP();
          hm.Id = worker.Id;
          hm.ChangeBy = worker.createdByUser;
          hm.DateChange = DateTime.Now.ToString();
          hm.NewStatus = worker.Status;
          _context.HistoryWP.Add(hm);


          await _context.SaveChangesAsync();


          string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
          Notification notification = new Notification()
          {
            Type = "Info",
            Text = "Work plan approved!",
            Status = "Unread",
            TimeStamp = DateTime.Now.ToString(),
            User = _context.Users.FirstOrDefault(u => u.Username == username),
            Visible = true
          };
        }

      }
      return CreatedAtAction("Cancel", worker);
    }


    [HttpPost]
    [Route("AddWorkPlan")]
    public async Task<ActionResult<WorkPlan>> AddWorkPlan(WorkPlan wr)
    {


      WorkPlan workplan = new WorkPlan()
      {
        Id = Guid.NewGuid().ToString(),
        Type = wr.Type,
        WorkPlanss = wr.WorkPlanss,
        Incident = wr.Incident,
        Street = wr.Street, //ne pise u spec sta je
        StartDate = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
        EndDate = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
        Status = wr.Status,
        createdByUser = wr.createdByUser,
        Crew = wr.Crew,
        Purpouse = wr.Purpouse,
        Notes = wr.Notes,
        PhoneNum = wr.PhoneNum,
        Company = wr.Company,
        DateCreated = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt")


      };

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
      Notification notification = new Notification()
      {
        Type = "Success",
        Text = "Work plan created",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);


      _context.WorkPlans.Add(workplan);

      await _context.SaveChangesAsync();



      return CreatedAtAction("GetWorkPlans", workplan);

    }
  }
}

