using Microsoft.EntityFrameworkCore;
using signApi.Model;

namespace signApi.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }

        public DbSet<User> users { get; set; }
    }
}
