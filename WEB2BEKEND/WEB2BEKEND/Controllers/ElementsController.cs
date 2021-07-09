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

    [HttpGet("{id}")]
    public async Task<ActionResult<Element>> GetElement(int id)
    {
      var element = await _context.Elements.FindAsync(id);
      if (element == null)
      {
        return NotFound();
      }

      return element;
    }


    [HttpPut]
    [Route("ChangeElement")]
    public async Task<ActionResult<Element>> ChangeElement(long id)
    {


      var element1 = _context.Elements.FirstOrDefault(n => n.Id == id);

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
      Notification notification = new Notification()
      {
        Type = "Warning",
        Text = "Element modified!",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();


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

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
      Notification notification = new Notification()
      {
        Type = "Warning",
        Text = "Element removed!",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();

      await _context.SaveChangesAsync();

      return CreatedAtAction("GetElements", element1);

    }

    [HttpPost]
    [Route("PostElement")]
    public async Task<ActionResult<Element>> PostElement(Element element)
    {
      _context.Elements.Add(element);
      await _context.SaveChangesAsync();
      element.Name = element.Type.Substring(0, 3) + element.Id.ToString();
      await _context.SaveChangesAsync();
      return CreatedAtAction("GetElement", new { id = element.Id }, element);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteElement(int id)
    {
      _context.Incidents.Include(item => item.Elements).ToList();
      var element = await _context.Elements.FindAsync(id);
      if (element == null)
      {
        return NotFound();
      }

      foreach(var item in _context.Incidents)
      {
        foreach(var el in item.Elements)
        {
          if(el.Id == id)
          {
            item.Elements.Remove(el);
          }
        }
      }

      _context.Elements.Remove(element);
      await _context.SaveChangesAsync();
      return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutElement(int id,Element element)
    {
      _context.Incidents.Include(item => item.Elements).ToList();
      if(id != element.Id)
      {
        return BadRequest();
      }
      _context.Entry(element).State = EntityState.Modified;

      try
      {
        element.Name = element.Type.Substring(0, 3) + element.Id.ToString();
        foreach (var item in _context.Incidents)
        {
          foreach (var el in item.Elements)
          {
            if (el.Id == id)
            {
              el.Name = element.Name;
              el.Type = element.Type;
              el.Address = element.Address;
              el.CoordinateX = element.CoordinateX;
              el.CoordinateY = element.CoordinateY;
            }
          }
        }
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        throw;
      }

      return NoContent();
    }


  }    
}
