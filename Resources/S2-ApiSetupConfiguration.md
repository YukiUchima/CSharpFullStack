# Section 2: API Configuration

## Initial Setup

- Use .NET 8.0 for Swagger Accessibility
- Add Controllers in bash command for new webapi
- Project folder called 'ReStore'
  - Contains API/ and ReStore.sln

```bash
    $ mkdir ReStore
        -> initialize project folder
    $ dotnet new sln
        -> this creates a sln file same name as the directory
    $ dotnet new webapi -o API -controllers
        -> creates webapi project, output in API folder with controllers
    $ dotnet sln add API/
    Project `API\API.csproj` added to the solution.
        -> add API project into solution
```

## SQLite

- Nuget: Microsoft.EntityFrameworkCore.Sqlite
- Nuget: Microsoft.EntityFrameworkCore.Design
- Install into directory: > API/ > Properties/ > API.csproj

## DbContext Services

- Add the Services for DbContext in the Program.cs: builder.Services.AddDbContext<StoreContext>()
  > API/ > Program.cs
