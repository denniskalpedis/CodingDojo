using System.ComponentModel.DataAnnotations;
namespace BankAccounts.Models
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
    public class BalanceViewModel : BaseEntity
    {
        [Required]
        [RegularExpression(@"^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$", ErrorMessage = "Not Valid Dollar amount!")]
        public double? balance {get;set;}
    }
}