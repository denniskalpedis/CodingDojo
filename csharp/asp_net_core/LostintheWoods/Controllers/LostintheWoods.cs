using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LostintheWoods.Models;

namespace LostintheWoods.Controllers{
	// [Route("/LostintheWoods")]
    public class LostintheWoodsController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
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
                // HttpContext.Session.SetObjectAsJson("trail", trail);
                // ViewBag.user = HttpContext.Session.GetObjectFromJson<User>("user");
                return View("Index");
            }
            return View("newtrail");
        }
    }
}
