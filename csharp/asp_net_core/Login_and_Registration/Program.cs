using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace Login_and_Registration{
    public class Program{
        public static void Main(string[] args){
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
    public static class SessionExtensions
{
    // We can call ".SetObjectAsJson" just like our other session set methods, by passing a key and a value
    public static void SetObjectAsJson(this ISession session, string key, object value)
    {
        // This helper function simply serializes theobject to JSON and stores it as a string in session
        session.SetString(key, JsonConvert.SerializeObject(value));
    }
       
    // generic type T is a stand-in indicating that we need to specify the type on retrieval
    public static T GetObjectFromJson<T>(this ISession session, string key)
    {
        string value = session.GetString(key);
        // Upon retrieval the object is deserialized based on the type we specified
        return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
    }
}
}
