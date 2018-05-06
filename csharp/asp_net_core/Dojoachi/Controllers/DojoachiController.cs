using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
 
namespace Dojoachi.Controllers
{
    public class DojoachiController : Controller
    {
        Random rand = new Random();
        // Dojoachi.Program.Pet pet = new Dojoachi.Program.Pet();
        string message = "Started a new Dojoachi";
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            // HttpContext.Session.SetInt32("fullness", (int)pet.fullness);
            // if(count == null)
            // {
            //     count = 1;
            // }
            // else
            // {
            //     count++;
            // }
            // const string allowedChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
            // char[] chars = new char[14];

            // for (int i = 0; i < 14; i++)
            // {
            //     chars[i] = allowedChars[rand.Next(0, allowedChars.Length)];
            // }
            // ViewBag.name
            HttpContext.Session.SetInt32("fullness", 20);
            HttpContext.Session.SetInt32("happiness", 20);
            HttpContext.Session.SetInt32("meals", 3);
            HttpContext.Session.SetInt32("energy", 50);
            ViewBag.fullness = HttpContext.Session.GetInt32("fullness");
            ViewBag.happiness = HttpContext.Session.GetInt32("happiness");
            ViewBag.meals = HttpContext.Session.GetInt32("meals");
            ViewBag.energy = HttpContext.Session.GetInt32("energy");
            ViewBag.message = message;
            return View();
        }
        [HttpGet]
        [Route("/feed")]
        public JsonResult Feed()
        {
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? happiness = HttpContext.Session.GetInt32("happiness");
            int? meals = HttpContext.Session.GetInt32("meals");
            int? energy = HttpContext.Session.GetInt32("energy");
            if (meals > 0)
            {
                int temp = rand.Next(5,11);
                int unhappy = rand.Next(1,5);
                if (unhappy == 1)
                {
                    meals -= 1;
                    HttpContext.Session.SetInt32("meals", (int)meals);
                    message = "Your Dojoachi did not like that! Meals -1";
                }
                else
                {
                    meals -= 1;
                    fullness +=temp;
                    HttpContext.Session.SetInt32("meals", (int)meals);
                    HttpContext.Session.SetInt32("fullness", (int)fullness);
                    message = "You have fed your Dojoachi! Meals -1, Fullness +" + temp;
                }
            }
            else 
            {
                message = "Not enough meals!";
            }
            if (fullness >= 100 && happiness >= 100 && energy >= 100)
            {
                var AnonObject = new {
                             fullness = HttpContext.Session.GetInt32("fullness"),
                             happiness = HttpContext.Session.GetInt32("happiness"),
                             meals = HttpContext.Session.GetInt32("meals"),
                             energy = HttpContext.Session.GetInt32("energy"),
                             message = "win"
                         };
                return Json(AnonObject);
            } else {
                var AnonObject = new {
                             fullness = HttpContext.Session.GetInt32("fullness"),
                             happiness = HttpContext.Session.GetInt32("happiness"),
                             meals = HttpContext.Session.GetInt32("meals"),
                             energy = HttpContext.Session.GetInt32("energy"),
                             message = message
                         };
                return Json(AnonObject);
            }
        }
        [HttpGet]
        [Route("/play")]
        public JsonResult Play()
        {
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? happiness = HttpContext.Session.GetInt32("happiness");
            int? energy = HttpContext.Session.GetInt32("energy");
            if (energy > 4)
            {
                // if ()
                // {

                // }
                int temp = rand.Next(5,11);
                int unhappy = rand.Next(1,5);
                if (unhappy == 1)
                {
                    energy -= 5;
                    HttpContext.Session.SetInt32("energy", (int)energy);
                    message = "Your Dojoachi did not have fun! Energy -5";
                }
                else
                {
                    energy -= 5;
                    happiness += temp;
                    HttpContext.Session.SetInt32("energy", (int)energy);
                    HttpContext.Session.SetInt32("happiness", (int)happiness);
                    message = "You have played with your Dojoachi! Energy -5, Happiness +" + temp;
                }
                
            }
            else 
            {
                message = "Not enough Energy!";
            }
            if (fullness >= 100 && happiness >= 100 && energy >= 100)
            {
                var AnonObject = new {
                             fullness = HttpContext.Session.GetInt32("fullness"),
                             happiness = HttpContext.Session.GetInt32("happiness"),
                             meals = HttpContext.Session.GetInt32("meals"),
                             energy = HttpContext.Session.GetInt32("energy"),
                             message = "win"
                         };
                return Json(AnonObject);
            } else
            {
                var AnonObject = new {
                             fullness = HttpContext.Session.GetInt32("fullness"),
                             happiness = HttpContext.Session.GetInt32("happiness"),
                             meals = HttpContext.Session.GetInt32("meals"),
                             energy = HttpContext.Session.GetInt32("energy"),
                             message = message
                         };
                return Json(AnonObject);
            }
        }
        [HttpGet]
        [Route("/work")]
        public JsonResult Work()
        {
            int? energy = HttpContext.Session.GetInt32("energy");
            int? meals = HttpContext.Session.GetInt32("meals");
            if (energy > 4)
            {
                int temp = rand.Next(1,4);
                energy -= 5;
                meals += temp;
                HttpContext.Session.SetInt32("energy", (int)energy);
                HttpContext.Session.SetInt32("meals", (int)meals);
                message = "You worked and earned " + temp + " meals! Energy -5, Meals +" + temp;
                
            }
            var AnonObject = new {
                         fullness = HttpContext.Session.GetInt32("fullness"),
                         happiness = HttpContext.Session.GetInt32("happiness"),
                         meals = HttpContext.Session.GetInt32("meals"),
                         energy = HttpContext.Session.GetInt32("energy"),
                         message = message
                     };
            return Json(AnonObject);
        }
        [HttpGet]
        [Route("/sleep")]
        public JsonResult Sleep()
        {
            int? energy = HttpContext.Session.GetInt32("energy");
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? happiness = HttpContext.Session.GetInt32("happiness");
            fullness -= 5;
            if (fullness < 0)
            {
                fullness = 0;
            }
            happiness -= 5;
            if (happiness < 0)
            {
                happiness = 0;
            }
            energy += 15;
            HttpContext.Session.SetInt32("energy", (int)energy);
            HttpContext.Session.SetInt32("happiness", (int)happiness);
            HttpContext.Session.SetInt32("fullness", (int)fullness);
            if (fullness >= 100 && happiness >= 100 && energy >= 100)
            {
                var AnonObject = new {
                             fullness = HttpContext.Session.GetInt32("fullness"),
                             happiness = HttpContext.Session.GetInt32("happiness"),
                             meals = HttpContext.Session.GetInt32("meals"),
                             energy = HttpContext.Session.GetInt32("energy"),
                             message = "win"
                         };
                return Json(AnonObject);
            }
            else if (fullness == 0 && happiness == 0 )
            {

                var AnonObject = new {
                             fullness = HttpContext.Session.GetInt32("fullness"),
                             happiness = HttpContext.Session.GetInt32("happiness"),
                             meals = HttpContext.Session.GetInt32("meals"),
                             energy = HttpContext.Session.GetInt32("energy"),
                             message = "lose"
                         };
                return Json(AnonObject);
            }
            else
            {
                message = "You slept and earned energy! Happiness -5, Fullness -5, Energy +15";
                var AnonObject = new {
                            fullness = HttpContext.Session.GetInt32("fullness"),
                            happiness = HttpContext.Session.GetInt32("happiness"),
                            meals = HttpContext.Session.GetInt32("meals"),
                            energy = HttpContext.Session.GetInt32("energy"),
                            message = message
                        };
                return Json(AnonObject);
            }
            
        }
        [Route("/reset")]
        public IActionResult Reset()
        {
            return RedirectToAction("Index");
        }
    }
}