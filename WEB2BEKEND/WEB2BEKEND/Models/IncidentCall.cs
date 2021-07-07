using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class IncidentCall
  {
    [Key]
    public int Id { get; set; }

    public string Reason { get; set; }
    public string Hazard { get; set; }
    public string Comment { get; set; }
    public string Name { get; set; }
    public string SurName { get; set; }
    public string Address { get; set; }
    public int Priority { get; set; }
  }
}
