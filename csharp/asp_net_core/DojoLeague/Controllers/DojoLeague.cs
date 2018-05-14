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
            ViewBag.ninjas = dojoleaguefactory.AllNinjas();
            ViewBag.dojos = dojoleaguefactory.AllDojos();
            return View();
        }
        [HttpPost]
        [Route("Ninjas")]
        public IActionResult Ninjas(Ninja ninja){
            if(ModelState.IsValid)
            {
                ViewBag.dojos = dojoleaguefactory.AllDojos();
                dojoleaguefactory.AddNinja(ninja);
                return RedirectToAction("Ninjas");
            }
            ViewBag.ninjas = dojoleaguefactory.AllNinjas();
            ViewBag.dojos = dojoleaguefactory.AllDojos();
            return View();
        }
        [Route("ninja/{id}")]
        public IActionResult Ninja(int id){
            ninjas = dojoleaguefactory.NinjaByID(id);
            // if(NotFound )
            // {
            //     return RedirectToAction("Ninjas");
            // }
            ViewBag.ninja = dojoleaguefactory.NinjaByID(id);
            return View("Ninja");
        }
        [Route("Dojos")]
        public IActionResult Dojos(){
            ViewBag.dojos = dojoleaguefactory.AllDojos();
            return View();
        }
        [HttpPost]
        [Route("Dojos")]
        public IActionResult Dojos(Dojo dojo){
            if(ModelState.IsValid)
            {
                dojoleaguefactory.AddDojo(dojo);
                return RedirectToAction("Dojos");
            }
            ViewBag.dojos = dojoleaguefactory.AllDojos();
            return View();
        }
        [Route("dojo/{id}")]
        public IActionResult Dojo(int id){
            // var dojo = dojoleaguefactory.DojoByID(id);
            // if(NotFound )
            // {
            //     return RedirectToAction("Ninjas");
            // }
            ViewBag.dojo = dojoleaguefactory.DojoByID(id);
            ViewBag.rogue = dojoleaguefactory.RogueNinja();
            return View("Dojo");
        }
        [Route("dojo/{d_id}/recruit/{n_id}")]
        public IActionResult recruit(int d_id, int n_id){
            dojoleaguefactory.Recruit(d_id, n_id);
            return RedirectToAction("dojo", new {id = d_id});
        }
        [Route("banish/{n_id}/{d_id}")]
        public IActionResult banish(int n_id, int d_id){
            dojoleaguefactory.Banish(n_id);
            return RedirectToAction("dojo", new {id = d_id});
        }

    }
}
