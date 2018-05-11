using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LostintheWoods.Models;
using LostintheWoods.Factory;

namespace LostintheWoods.Controllers{
	// [Route("/LostintheWoods")]
    public class LostintheWoodsController:Controller{
        TrailsFactory trailfactory;
        public LostintheWoodsController()
        {
            trailfactory = new TrailsFactory();
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            ViewBag.trails = trailfactory.FindAll();
            return View("Index");
        }
        [Route("newtrail")]
        public IActionResult newtrail(){
            return View();
        }
        [HttpPost]
        [Route("newtrail")]
        public IActionResult newtrailpost(Trails trail){
            if(ModelState.IsValid)
            {
                trailfactory.Add(trail);
                // HttpContext.Session.SetObjectAsJson("trail", trail);
                // ViewBag.user = HttpContext.Session.GetObjectFromJson<User>("user");
                return RedirectToAction("Index");
            }
            return View("newtrail");
        }
        [Route("trail/{id}")]
        public IActionResult trail(int id){
            ViewBag.Trail = trailfactory.FindByID(id);
            
            return View();
        }
    }
}
