using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class Street
  {
    [Key]
    public string Name { get; set; }

    public int dPriority { get; set; }

    public int cPriority { get; set; }
  }
}
