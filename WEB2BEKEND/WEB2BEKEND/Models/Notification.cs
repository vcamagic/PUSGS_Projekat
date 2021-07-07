using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class Notification
  {
    [Key]
    public long Id { get; set; }


    public bool Deleted { get; set; }

    public bool Visible { get; set; }
    public string Type { get; set; }
    public string Text { get; set; }
    public string Status { get; set; }
    public string TimeStamp { get; set; }

    public User User { get; set; }
  }
}
