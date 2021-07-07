using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class IncidentElement
  {
    [Key]
    public int Id { get; set; }
    public string Type { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string CoordinateX { get; set; }
    public string CoordinateY { get; set; }
  }
}
