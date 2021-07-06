using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class SafetyDocument
  {
    [Key]
    public string Id { get; set; }

    public string Type { get; set; }

    public string WorkPlanssz { get; set; }

    public string Status { get; set; }

    public string createdByUser { get; set; }

    public string Crew { get; set; }

    public string endDate { get; set; }

    public string Details { get; set; }


    public string Notes { get; set; }

    public string PhoneNum { get; set; }

    public string DateTimeCreate { get; set; }
  }
}
