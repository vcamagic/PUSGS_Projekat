using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class MapModel
  {
    public string Id { get; set; }
    public int IncidentId { get; set; }
    public string X { get; set; }
    public string Y { get; set; }
    public string CrewName { get; set; }
    public MapModel()
    {

    }
  }
}
