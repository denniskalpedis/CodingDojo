using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pokeinfo.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Pokeinfo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpGet]
        [Route("pokemon/{pokeid}")]
        public IActionResult Pokemon(int pokeid)
        {
            var PokeInfo = new WebRequest.pokemon();
            WebRequest.GetPokemonDataAsync(pokeid, ApiResponse =>
                {
                    PokeInfo = ApiResponse;
                }
            ).Wait();
            PokeInfo.name = PokeInfo.name.First().ToString().ToUpper() + PokeInfo.name.Substring(1);
            ViewBag.pokemon = PokeInfo;

            
            return View();
            // Other code
        }
    }
}
