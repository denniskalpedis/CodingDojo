using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thewall.Models;
using System;

namespace Thewall.Controllers{
	[Route("/Thewall")]
    public class ThewallController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
        [HttpPost]
        [Route("PostMessage")]
        public JsonResult Post(string message){
            List<string> comments = new List<string>();
            var AnonObject = new {
                         message = comments
                     };
            return Json(AnonObject);
        }
    }
}
