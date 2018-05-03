using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace YourNamespace.Controllers
{
    public class HelloController : Controller
    {
        public string Index()
        {
            return "Hello World!";
        }
        [Route("{first_name}/{last_name}/{age}/{favorite_color}")]
        public JsonResult DisplayInfo(string first_name, string last_name, int age, string favorite_color)
        {
            var obj = new {
                         FirstName = first_name,
                         LastName = last_name,
                         Age = age,
                         FavoriteColor = favorite_color
                     };
            return Json(obj);
        }
    }
}