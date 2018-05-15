using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RESTauranter.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace RESTauranter.Controllers{
    public class RESTauranterController:Controller{
        private RESTauranterContext _context;
        public RESTauranterController(RESTauranterContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
        [HttpPost]
        [Route("")]
        public IActionResult addNew(Reviews newReview){
            if(ModelState.IsValid)
            {
                System.Console.WriteLine("valid");
                _context.Add(newReview);
                _context.SaveChanges();
                
                return RedirectToAction("review");
            }
            return View("Index");
        }

                [HttpGet]
        [Route("review")]
        public IActionResult review(){
            ViewBag.reviews = _context.reviews.OrderBy(date => date.created_at).ToList();
            return View();
        }

    }
}
