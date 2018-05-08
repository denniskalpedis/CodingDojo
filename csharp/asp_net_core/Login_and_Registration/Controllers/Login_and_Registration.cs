using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Login_and_Registration.Models;

namespace Login_and_Registration.Controllers{
	[Route("/Login_and_Registration")]
    public class Login_and_RegistrationController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
        [HttpPost]
        [Route("Register")]
        public IActionResult Register(User user){
            if(ModelState.IsValid)
            {
                HttpContext.Session.SetObjectAsJson("user", user);
                ViewBag.user = HttpContext.Session.GetObjectFromJson<User>("user");
                return View("success");
            }
            return View("Index");
        }
        [HttpGet]
        [Route("Register")]
        public IActionResult Register(){
            return RedirectToAction("Index");
        }
        [HttpGet]
        [Route("Login")]
        public IActionResult Login(){
            return View("login");
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string email, string password){
            User user = HttpContext.Session.GetObjectFromJson<User>("user");
            if(user == null)
            {
                return RedirectToAction("Index");
            }
            if (email == user.email && password == user.password)
            {
                ViewBag.user = user;
                return View("success");
            }
            return View("login");
        }
    }
}
