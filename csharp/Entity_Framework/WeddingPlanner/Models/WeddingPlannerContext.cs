using Microsoft.EntityFrameworkCore;

namespace WeddingPlanner.Models{
    public class WeddingPlannerContext:DbContext{
        public WeddingPlannerContext(DbContextOptions<WeddingPlannerContext> options):base(options){}
        public DbSet<User> Users { get; set; }
        public DbSet<Wedding> Wedding { get; set; }
        public DbSet<RSVP> RSVP { get; set; }
	    // public DbSet<User> users { get; set; }
    }
}
