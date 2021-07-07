using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
  public class ConsumerController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public ConsumerController(DefaultConnection context)
    {
      _context = context;
    }


    [HttpGet]
    [Route("GetConsumers")]
    //[Authorize(Roles = "Admin")]
    public async Task<ActionResult<IEnumerable<Consumer>>> GetConsumers()
    {
      List<Consumer> consumers = new List<Consumer>();

      foreach (Consumer cons in _context.Consumers)
      {
        if (cons.Deleted == false)
        {
          consumers.Add(cons);
        }
      }

      return consumers;
    }


    [HttpPost]
    [Route("SaveConsumer")]
    public async Task<ActionResult<Consumer>> SaveConsumer(Consumer consumer)
    {
      if (ModelState.IsValid)
      {
        Consumer cons = new Consumer
        {
          Name = consumer.Name,
          Surname = consumer.Surname,
          Street = consumer.Street,
          City = consumer.City,
          Postal = consumer.Postal,
          Phone = consumer.Phone,
          Type = consumer.Type
        };

        char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

        string newStreet = consumer.Street.Split(separators, 2)[0].Trim();
        bool contain = false;
        foreach (Street street in _context.Streets)
        {
          if (street.Name == newStreet)
          {
            contain = true;
            cons.Priority = street.cPriority;
          }
        }

        if (!contain)
        {
          cons.Priority = 1;
        }

        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

        Notification notification = new Notification()
        {
          Type = "Success",
          Text = "Consumer created",
          Status = "Unread",
          TimeStamp = DateTime.Now.ToString(),
          User = _context.Users.FirstOrDefault(u => u.Username == username),
          Visible = true
        };

        _context.Notifications.Add(notification);


        _context.Consumers.Add(cons);


        await _context.SaveChangesAsync();

        return CreatedAtAction("SaveConsumer", cons);
      }
      else
      {
        return BadRequest();
      }

    }

    [HttpPut]
    [Route("ModifyConsumer")]
    public async Task<ActionResult<Consumer>> ModifyConsumer(Consumer consumer)
    {

      Consumer con = new Consumer();
      foreach (Consumer cons in _context.Consumers)
      {
        if (cons.Id == consumer.Id)
        {
          con = cons;
          break;
        }
      }

      con.Name = consumer.Name;
      con.Surname = consumer.Surname;
      con.Street = consumer.Street;
      con.City = consumer.City;
      con.Postal = consumer.Postal;
      con.Phone = consumer.Phone;

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      Notification notification = new Notification()
      {
        Type = "Warning",
        Text = "Consumer " + consumer.Id + " modified",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);



      await _context.SaveChangesAsync();

      return CreatedAtAction("ModifyConsumer", con);

    }


    [HttpPut]
    [Route("DeleteConsumer")]
    public async Task<ActionResult<Consumer>> DeleteConsumer([FromBody] long id)
    {

      Consumer con = new Consumer();
      foreach (Consumer cons in _context.Consumers)
      {
        if (cons.Id == id)
        {
          con = cons;
          break;
        }
      }

      con.Deleted = true;

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      Notification notification = new Notification()
      {
        Type = "Warning",
        Text = "Consumer " + id + " deleted",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);


      await _context.SaveChangesAsync();

      return CreatedAtAction("DeleteConsumer", con);

    }


    [HttpGet]
    [Route("GetConsumer")]
    public async Task<ActionResult<Consumer>> GetConsumer(long id)
    {
      Consumer consumer = new Consumer();

      foreach (Consumer cons in _context.Consumers)
      {
        if (cons.Id == id)
        {
          consumer = cons;
        }
      }

      return consumer;
    }




  }
}

