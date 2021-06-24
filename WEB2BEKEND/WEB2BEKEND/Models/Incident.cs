using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class Incident
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Type { get; set; }
    public int Priority { get; set; }
    public bool Confirmed { get; set; }
    public string Status { get; set; }
    public string Eta { get; set; }
    public string Ata { get; set; }
    public string TimeOfIncident { get; set; }
    public string Etr { get; set; }
    public int Calls { get; set; }
    public int Voltage { get; set; }
    public int AffectedConsumers { get; set; }
    public string SheduledTime { get; set; }
    public string Creator { get; set; }
    public string Address { get; set; }

    public ICollection<IncidentElement> Elements { get; set; }
    public ICollection<IncidentCall> Call { get; set; }
    public ICollection<IncidentResolution> Resolutions { get; set; }
    public ICollection<Multimedia> Multimedia { get; set; }
  }
}
