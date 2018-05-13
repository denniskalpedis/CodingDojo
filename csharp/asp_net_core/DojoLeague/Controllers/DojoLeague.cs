using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DojoLeague.Models;
using System.Collections.Generic;
using DojoLeague.Factory;


namespace DojoLeague.Controllers{
	// [Route("/DojoLeague")]
    public class DojoLeagueController:Controller{
        public Ninja ninjas;
        public Dojo dojos;
        public DojoLeagueFactory dojoleaguefactory;
        public DojoLeagueController()
        {
            ninjas = new Ninja();
            dojos = new Dojo();
            dojoleaguefactory = new DojoLeagueFactory();
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
        [Route("Ninjas")]
        public IActionResult Ninjas(){
            return View();
        }
        [HttpPost]
        [Route("Ninjas")]
        public IActionResult Ninjas(Ninja ninja){
            if(ModelState.IsValid)
            {
                dojoleaguefactory.AddNinja(ninja);
                return RedirectToAction("Ninjas");
            }
            return View();
        }
    }
}
