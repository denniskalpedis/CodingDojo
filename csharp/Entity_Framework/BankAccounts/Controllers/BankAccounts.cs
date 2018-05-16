using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BankAccounts.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Identity;

namespace BankAccounts.Controllers{
    public class BankAccountsController:Controller{
        private BankAccountsContext _context;
    
        public BankAccountsController(BankAccountsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Account");
            }
            return View("Index");
        }
        [HttpPost]
        [Route("")]
        public IActionResult Register(RegisterViewModel model){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Account");
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
                    password = model.password,
                    balance = 0
                };
                _context.Users.Add(user);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("Id", user.id);

                return RedirectToAction("Account");
            }
            return View("Index");
        }
        [HttpGet]
        [Route("login")]
        public IActionResult Login(){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Account");
            }
            return View("Login");
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginViewModel model){
            int? Id = HttpContext.Session.GetInt32("Id");
            if(Id != null)
            {
                return RedirectToAction("Account");
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
                    return RedirectToAction("Account");
                }
                ModelState.AddModelError("email", "Credentials are wrong.");
                return View("Login");
                
            }
            return View("Login");
        }
        [Route("Account")]
        public IActionResult Account(){
            if(HttpContext.Session.GetInt32("Id") == null)
            {
                return RedirectToAction("Index");
            }
            var user = _context.Users.Include( u => u.transactions ).SingleOrDefault(u => u.id == HttpContext.Session.GetInt32("Id"));
            user.transactions = user.transactions.OrderByDescending(t => t.created_at).ToList();
            ViewBag.user = user;
            return View();
        }
        [HttpPost]
        [Route("Transaction")]
        public IActionResult transaction(BalanceViewModel transaction){
            if(HttpContext.Session.GetInt32("Id") == null)
            {
                return RedirectToAction("Index");
            }
            var user = _context.Users.Include( u => u.transactions ).SingleOrDefault(u => u.id == HttpContext.Session.GetInt32("Id"));
            if(ModelState.IsValid){
                
                if(transaction.balance < 0){
                    if(user.balance + transaction.balance < 0){
                        ModelState.AddModelError("balance", "You don't have enough to withdraw " + transaction.balance + ".");
                        user = _context.Users.Include( u => u.transactions ).SingleOrDefault(u => u.id == HttpContext.Session.GetInt32("Id"));
                        user.transactions = user.transactions.OrderByDescending(t => t.created_at).ToList();
                        ViewBag.user = user;
                        return View("Account");
                    }
                }
                Transaction newtransaction = new Transaction{
                    amount = transaction.balance,
                    userid = user.id,
                    user= user
                };

                _context.Transactions.Add(newtransaction);
                user.balance += transaction.balance;
                _context.SaveChanges();

                return RedirectToAction("Account");
                
            }
            user.transactions = user.transactions.OrderByDescending(t => t.created_at).ToList();
            ViewBag.user = user;
            return View("Account");
        }
        [Route("logout")]
        public IActionResult Logout(){
            HttpContext.Session.Remove("Id");
            return RedirectToAction("Index");
        }
    }
}
