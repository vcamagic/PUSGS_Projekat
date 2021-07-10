using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class HistorySafeDocs
  {
    [Key]
    public int Id { get; set; }
    public string Email { get; set; }
    public string State { get; set; }
    public string Date { get; set; }
  }
}
