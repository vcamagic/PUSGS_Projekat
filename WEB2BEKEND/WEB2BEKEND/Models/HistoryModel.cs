using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class HistoryModel
  {
    [Key]
    public string Id { get; set; }
    public string DocumentId { get; set; }
    public string DateChange { get; set; }
    public string ChangeBy { get; set; }
    public string NewStatus { get; set; }
  }
}
