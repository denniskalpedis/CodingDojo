using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using WeddingPlanner.Models;
using System;

namespace WeddingPlanner.Controllers{
	// [Route("/WeddingPlanner")]
    public class WeddingPlannerController:Controller{
    	private WeddingPlannerContext _context;

    	public WeddingPlannerController(WeddingPlannerContext context){
    		_context = context;
    	}

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Dashboard");
            }
            return View("Index");
        }
        [HttpPost]
        [Route("")]
        public IActionResult Register(RegisterViewModel model){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Dashboard");
            }
            if(ModelState.IsValid){
                if(_context.Users.Any(u => u.email == model.email)){
                    ModelState.AddModelError("email", "A user with this email already exists.");
                    return View("Index");
                }
                PasswordHasher<RegisterViewModel> Hasher = new PasswordHasher<RegisterViewModel>();
                model.password = Hasher.HashPassword(model, model.password);
                User user = new User{
                    first_name = model.first_name,
                    last_name = model.last_name,
                    email = model.email,
                    password = model.password
                };
                _context.Users.Add(user);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("Id", user.id);

                return RedirectToAction("Dashboard");
            }
            return View("Index");
        }
        [HttpGet]
        [Route("login")]
        public IActionResult Login(){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Dashboard");
            }
            return View("Login");
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginViewModel model){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Dashboard");
            }
            if(ModelState.IsValid){
                if (!_context.Users.Any(u => u.email == model.email)){
                    ModelState.AddModelError("email", "Credentials are wrong.");
                    return View("Login");
                }
                var user = _context.Users.SingleOrDefault(u => u.email == model.email);
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(user, user.password, model.password))
                {
                    //Handle success
                    HttpContext.Session.SetInt32("Id", user.id);
                    return RedirectToAction("Dashboard");
                }
                ModelState.AddModelError("email", "Credentials are wrong.");
                return View("Login");
                
            }
            return View("Login");
        }
        [Route("Dashboard")]
        public IActionResult Dashboard(){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.weddings = _context.Wedding.Include( u => u.creator ).Include(u => u.attendees ).ThenInclude(u => u.user );
            ViewBag.user = _context.Users.SingleOrDefault(u => u.id == HttpContext.Session.GetInt32("Id"));
            return View("Dashboard");
        }

        [Route("AddWedding")]
        public IActionResult AddWedding(){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            }
            return View("AddWedding");
        }

        [HttpPost]
        [Route("AddWedding")]
        public IActionResult SaveWedding(WeddingViewModel model){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            }
            if(model.date < DateTime.Now){
                ModelState.AddModelError("date", "A date can not be in the past.");
                return View("AddWedding");
            }
            if(ModelState.IsValid){
                Wedding newwedding = new Wedding{
                    wedderone = model.wedderone,
                    weddertwo = model.weddertwo,
                    address = model.address,
                    date = model.date,
                    userid = Id
                };
                // Wedding newwedding = model;
                _context.Wedding.Add(newwedding);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            }
            return View("AddWedding");
        }

        [Route("logout")]
        public IActionResult Logout(){
            HttpContext.Session.Remove("Id");
            return RedirectToAction("Index");
        }

        [Route("RSVP/{id}")]
        public IActionResult RSVP(int id){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            };
            RSVP rsvp = new RSVP{
                userid = Id,
                weddingid = id
            };
            _context.RSVP.Add(rsvp);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [Route("UNRSVP/{id}")]
        public IActionResult UNRSVP(int id){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            }
            var rsvp = _context.RSVP.SingleOrDefault(u => u.userid == Id && u.weddingid == id);
            if(rsvp != null){
                _context.RSVP.Remove(rsvp);
                _context.SaveChanges();
            }
            return RedirectToAction("Dashboard");
        }

        [Route("delete/{id}")]
        public IActionResult Delete(int id){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            }
            var wedding = _context.Wedding.Include( u => u.creator ).Include(u => u.attendees ).ThenInclude(u => u.user ).SingleOrDefault(u => u.id == id);
            if(wedding != null && wedding.creator.id == Id){
                _context.Wedding.Remove(wedding);
                _context.SaveChanges();
            }
            return RedirectToAction("Dashboard");
        }

        [Route("show/{id}")]
        public IActionResult Show(int id){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id == null)
            {
                return RedirectToAction("Index");
            }
            var wedding = _context.Wedding.Include( u => u.creator ).Include(u => u.attendees ).ThenInclude(u => u.user ).SingleOrDefault(u => u.id == id);
            ViewBag.wedding = wedding;
            return View("Wedding");
        }
    }
}
