using Microsoft.EntityFrameworkCore;

namespace vvaveapi.Models { 
    public class Web_userContext : DbContext 
    { 
        public Web_userContext(DbContextOptions<Web_userContext> options) : base(options)
        {
            
        }
        public DbSet<WEB_USER> WEB_USER {get;set;}
    }
}