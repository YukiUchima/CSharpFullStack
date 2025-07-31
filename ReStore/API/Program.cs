using API.Data;
// using API.Data.Migrations; // not required? 
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Adding Services for DbContext
builder.Services.AddDbContext<StoreContext>(opt => 
{
    // Add Configuration for database connection string
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")); //UseSqlite (entity framework)
});
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection(); // only for production
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyHeader().WithOrigins("http://localhost:3000");
});
app.UseAuthorization();

app.MapControllers();

IServiceScope scope = app.Services.CreateScope();
StoreContext context = scope.ServiceProvider.GetRequiredService<StoreContext>();
ILogger logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration");
}

app.Run();

