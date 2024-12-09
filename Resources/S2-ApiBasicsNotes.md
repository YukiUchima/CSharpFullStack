# Section 2: API Basics

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

## Entities (class)

- Create new folder called Entities inside API/

### Entity Framework

- Basically helps us to focus on high-level coding while Framework handles connection with database, including:

  - retrieving and sending database information
  - establishing and maintaing connections
  - implement SQL queries
  - only relational databases

#### Entity Framework Features

- Modelling
- Querying
- Change Tracking
- Save
- Concurrency (protect overwriting and changes)
- Transactions
- Caching
- BuiltIn Conventions
- Migrations

### DbContext Class

- Provides session or gateway to database
- Manages connection
- Create new Data folder to handle entity framework

  - Inside Data, we will have a StoreContext class that is derived from the Entity Framework Class
  - The class will be created as follows:

  ```cs
  // ------- API/Data/StoreContext.cs
  public class StoreContext : DbContext{}

  ```

- Add Configuration Values for our DbContext connection strings

```json
// ------- API/appsettings.Development.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Information"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Data source-store.db"
  }
}
```

### LINQ

- Implement queries in C# by translating to SQL and retrieving objects from database

### Entity Framework MIGRATION

- Search via google "dotnet-ef nuget"
- Copy install command using bash

```bash
  # See current tools globally installed:
  dotnet tool list -g
  # Install command
  dotnet tool install --global dotnet-ef --version 8.0.4
  # If req'd, install updated version
  dotnet tool update --global dotnet-ef
  # Run dotnet ef command to see information
  dotnet ef
```
