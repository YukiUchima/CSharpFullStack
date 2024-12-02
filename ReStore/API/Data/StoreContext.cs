using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext : DbContext   // StoreContext class derived from Entity Framework Class, hence the DbContext 
{
    public StoreContext(DbContextOptions options) : base(options)   // Passes the options to the base class, which in this context, it is DbContext class
    {
        
    }

    // Add DbSet property
    public DbSet<Product> Products {get;set;}       // This will be the Products TABLE in the database
}
