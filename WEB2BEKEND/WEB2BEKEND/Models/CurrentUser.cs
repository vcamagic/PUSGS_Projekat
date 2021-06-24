using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
  public class CurrentUser
  {
    public string Token { get; set; }
    public string Username { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string Type { get; set; }
  }
}
