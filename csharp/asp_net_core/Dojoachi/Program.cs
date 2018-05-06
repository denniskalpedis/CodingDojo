using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Dojoachi
{
    public class Program
    {
        public class Pet
        {
            public int fullness;
            public int happiness;
            public int meals;
            public int energy;
            public Pet()
            {
                this.fullness = 20;
                this.happiness = 20;
                this.energy = 50;
                this.meals = 3;
            }

        }
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
