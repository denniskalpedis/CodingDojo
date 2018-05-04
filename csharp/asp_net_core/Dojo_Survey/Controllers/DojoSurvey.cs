using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace DojoSurvey.Controllers
{
    public class SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("results")]
        public IActionResult Results(string name, string email, string dojo, string language, string message)
        {
            ViewBag.name = name;
            ViewBag.email = email;
            ViewBag.dojo = dojo;
            ViewBag.language = language;
            ViewBag.message = message;
            return View();
        }
    }
}