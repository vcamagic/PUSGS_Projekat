using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class WorkRequest
  {
    [Key] 
    public string Id { get; set; }
    public string Type { get;set; }
    public string Status { get; set; }
    public string Incident { get; set; }
    public string Street { get; set; }
    public string StartDate { get; set; }
    public string EndDate { get; set; }
    public string CreatedByUser { get; set; }
    public string Purpose { get; set; }
    public string PhoneNum { get; set; }
    public string Company { get; set; }
    public string Details { get; set; }
    public string Notes { get; set; }
    public string DateCreated { get; set; }
    public string History { get; set; }
    public string State { get; set; }
    public string Multimedia { get; set; }
    public string Equipment { get; set; }
  }
}
