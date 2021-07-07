using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class IncidentResolution
  {
    [Key]
    public int Id { get; set; }

    public string Cause { get; set; }

    public string SubCause { get; set; }

    public string Construction { get; set; }

    public string Material { get; set; }
  }
}
