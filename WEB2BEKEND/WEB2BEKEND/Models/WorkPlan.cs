using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class WorkPlan
  {

    [Key]
    public string Id { get; set; }
    public string Type { get; set; }

    public string WorkPlanss { get; set; }

    public string Incident { get; set; }

    public string Street { get; set; }

    public string StartDate { get; set; }

    public string EndDate { get; set; }

    public string Status { get; set; }

    public string createdByUser { get; set; }

    public string Crew { get; set; }

    public string Purpouse { get; set; }

    public string Notes { get; set; }

    public string PhoneNum { get; set; }

    public string Company { get; set; }

    public string DateCreated { get; set; }
  }
}
