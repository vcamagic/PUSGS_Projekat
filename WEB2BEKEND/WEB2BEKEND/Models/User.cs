using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2BEKEND.Models
{
    public class User
    {
    [Key]
    public string Username { get; set; }


    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Email { get; set; }
    public string Password { get; set; }

    public string BirthDate { get; set; }

    public string Address { get; set; }

    public string InputState { get; set; }

    public string Picture { get; set; }






    public User()
    {
      Username = "";
      Password = "";
      FirstName = "";
      LastName = "";
      BirthDate = "";
      Address = "";
      Email = "";
      InputState = "";

    }
  }
}
