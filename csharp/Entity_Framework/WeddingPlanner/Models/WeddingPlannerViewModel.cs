using System.ComponentModel.DataAnnotations;
using System;
namespace WeddingPlanner.Models

{
    public class RegisterViewModel : BaseEntity
    {
        [Required]
        [MinLength(2)]
        [Display(Name = "First Name")]
        [RegularExpression(@"^[a-zA-Z -]+$")]
        public string first_name { get; set; }

        [Required]
        [MinLength(2)]
        [Display(Name = "Last Name")]
        [RegularExpression(@"^[a-zA-Z '-]+$")]
        public string last_name { get; set; }
 
        [Required]
        [EmailAddress]
        [Display(Name = "E-Mail")]
        public string email { get; set; }
 
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string password { get; set; }
 
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        [Compare("password", ErrorMessage = "Password and confirmation must match.")]
        public string passwordconfirmation { get; set; }
    }

    public class LoginViewModel : BaseEntity
    {
        [Required]
        [EmailAddress]
        [Display(Name = "E-Mail")]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string password { get; set; }
    }

    public class WeddingViewModel : BaseEntity
    {
        [Required]
        [Display(Name = "Wedder One")]
		public string wedderone{get;set;}
        [Required]
        [Display(Name = "Wedder Two")]
		public string weddertwo{get;set;}
        [Required]
		[Display(Name = "Date")]
		[DataType(DataType.Date)]
		public DateTime date{get;set;}
        [Required]
        [Display(Name = "Address")]
		public string address{get;set;}
    }
}