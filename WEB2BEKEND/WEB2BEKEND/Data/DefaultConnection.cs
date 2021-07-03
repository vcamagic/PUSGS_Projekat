using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2BEKEND.Models;

namespace WEB2BEKEND.Data
{
    public class DefaultConnection : DbContext
    {
        

        public DefaultConnection (DbContextOptions<DefaultConnection> options)
            : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Incident> Incidents { get; set; }

        public DbSet<Element> Elements { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }
        public DbSet<Call> Calls { get; set; }

    }
}
