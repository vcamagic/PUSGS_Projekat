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

      _context.SafetyDocuments.Include(item => item.Elements).ToList();
      _context.SafetyDocuments.Include(item => item.History).ToList();
      _context.SafetyDocuments.Include(item => item.Multimedia).ToList();
      return await _context.SafetyDocuments.ToListAsync();

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SafetyDocument>> GetSafetyDocument(int id)
    {
      _context.SafetyDocuments.Include(item => item.Elements).ToList();
      _context.SafetyDocuments.Include(item => item.History).ToList();
      _context.SafetyDocuments.Include(item => item.Multimedia).ToList();
      var safetyDocument = await _context.SafetyDocuments.FindAsync(id);

      if (safetyDocument == null)
      {
        return NotFound();
      }

      return safetyDocument;
    }

    [HttpPost]
    public async Task<ActionResult<SafetyDocument>> PostSafetyDocument(SafetyDocument safetyDocument)
    {
      
        _context.SafetyDocuments.Add(safetyDocument);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetSafetyDocument", new { id = safetyDocument.Id }, safetyDocument);
     
    }

    [HttpPost("{id}/history")]
    public async Task<ActionResult<HistorySafeDocs>> PostSafetyDocumentHistory(int id, HistorySafeDocs history)
    {
      _context.SafetyDocuments.Include(item => item.History).ToList();
      var doc = await _context.SafetyDocuments.FindAsync(id);

      if (doc == null)
      {
        return NotFound();
      }
      history.Id = 0;
      history.Date = DateTime.Now.ToString("MM/dd/yyyy");
      if (history.State == "Approved")
      {
        doc.State = "Approved";
      }
      else if (history.State == "Canceled")
      {
        doc.State = "Canceled";
      }
      doc.History.Add(history);
      await _context.SaveChangesAsync();
      return history;
    }

    [HttpPost("{id}/devices")]
    public async Task<IActionResult> PostSafetyDocumentElement(int id, IncidentElement element)
    {
      _context.SafetyDocuments.Include(item => item.Elements).ToList();
      var doc = await _context.SafetyDocuments.FindAsync(id);

      if (doc == null)
      {
        return NotFound();
      }
      element.Id = 0;
      doc.Elements.Add(element);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    [HttpPost("{id}/multimedia"), DisableRequestSizeLimit]
    public async Task<ActionResult<Multimedia>> PostSafetyDocumentMultimedia(int id, Multimedia multimedia)
    {

      _context.SafetyDocuments.Include(item => item.Multimedia).ToList();

      var doc = await _context.SafetyDocuments.FindAsync(id);
      if (doc == null)
      {
        return NotFound();
      }
      multimedia.Id = 0;
      doc.Multimedia.Add(multimedia);
      await _context.SaveChangesAsync();
      return multimedia;
    }

    [HttpDelete("{id}/{elementId}/devices")]
    public async Task<IActionResult> DeleteSafetyDocumentElement(int id, int elementId)
    {
      _context.SafetyDocuments.Include(item => item.Elements).ToList();
      var doc = await _context.SafetyDocuments.FindAsync(id);

      if (doc == null)
      {
        return NotFound();
      }
      IncidentElement element = doc.Elements.Where(item => item.Id == elementId).FirstOrDefault();
      doc.Elements.Remove(element);
      await _context.SaveChangesAsync();
      return NoContent();
    }

    [HttpDelete("{id}/{multimediaId}/multimedia")]
    public async Task<IActionResult> DeleteIncidentMultimedia(int id, int multimediaId)
    {
      _context.SafetyDocuments.Include(item => item.Multimedia).ToList();
      var doc = await _context.SafetyDocuments.FindAsync(id);

      if (doc == null)
      {
        return NotFound();
      }
      Multimedia m = doc.Multimedia.Where(item => item.Id == multimediaId).FirstOrDefault();
      doc.Multimedia.Remove(m);
      await _context.SaveChangesAsync();
      return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutSafetyDocument(int id, SafetyDocument safetyDocument)
    {
      
        if (id != safetyDocument.Id)
        {
          return BadRequest();
        }
        _context.Entry(safetyDocument).State = EntityState.Modified;

        try
        {
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!SafetyDocumentExists(id))
          {
            return NotFound();
          }
          else
          {
            throw;
          }
        }
      
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSafetyDocument(int id)
    {
      
        _context.SafetyDocuments.Include(item => item.Elements).ToList();
        _context.SafetyDocuments.Include(item => item.History).ToList();
        _context.SafetyDocuments.Include(item => item.Multimedia).ToList();

        var safetyDocument = await _context.SafetyDocuments.FindAsync(id);
        if (safetyDocument == null)
        {
          return NotFound();
        }

        _context.SafetyDocuments.Remove(safetyDocument);
        await _context.SaveChangesAsync();
      
      return NoContent();
    }

    private bool SafetyDocumentExists(int id)
    {
      return _context.SafetyDocuments.Any(e => e.Id == id);
    }
  }
}
  
