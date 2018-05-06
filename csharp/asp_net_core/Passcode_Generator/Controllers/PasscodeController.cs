using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
 
namespace Passcode.Controllers
{
    public class PasscodeController : Controller
    {
        Random rand = new Random();
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            int? count = HttpContext.Session.GetInt32("Count");
            if(count == null)
            {
                count = 1;
            }
            else
            {
                count++;
            }
            HttpContext.Session.SetInt32("Count", (int)count);
            const string allowedChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
            char[] chars = new char[14];

            for (int i = 0; i < 14; i++)
            {
                chars[i] = allowedChars[rand.Next(0, allowedChars.Length)];
            }
            ViewBag.passcode = new string(chars);
            ViewBag.count = count;
            return View();
        }
        [HttpGet]
        [Route("/passcode")]
        public JsonResult Passcode()
        {
            int? count = HttpContext.Session.GetInt32("Count");
            if(count == null)
            {
                count = 1;
            }
            else
            {
                count++;
            }
            HttpContext.Session.SetInt32("Count", (int)count);
            const string allowedChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
            char[] chars = new char[14];

            for (int i = 0; i < 14; i++)
            {
                chars[i] = allowedChars[rand.Next(0, allowedChars.Length)];
            }
            string passcode = new string(chars);
            var AnonObject = new {
                         Count = count,
                         Passcode = passcode
                     };
            return Json(AnonObject);
        }
        [Route("/reset")]
        public void Reset()
        {
            HttpContext.Session.SetInt32("Count", 0);
        }
    }
}