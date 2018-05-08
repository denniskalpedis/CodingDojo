using System.ComponentModel.DataAnnotations;

namespace Login_and_Registration.Models{
	public class Login_and_Registration{

/*
	Useful Annotations and Examples:

	[Required] - Makes a field required.
	[RegularExpression(@"[0-9]{0,}\.[0-9]{2}", ErrorMessage = "error Message")] - Put a REGEX string in here.
	[MinLength(100)] - Field must be at least 100 characters long.
	[MaxLength(1000)] - Field must be at most 1000 characters long.
	[Range(5,10)] - Field must be between 5 and 10 characters.
	[EmailAddress] - Field must contain an @ symbol, followed by a word and a period.
	[DataType(DataType.Password)] - Ensures that the field conforms to a specific DataType
*/

	
	}
		public class User{
			[Required]
			[MinLength(2)]
			[Display(Name = "First Name")]
			public string firstname { get; set; }

			[Required]
			[MinLength(2)]
			[Display(Name = "Last Name")]
			public string lastname { get; set; }

			[Required]
			[EmailAddress]
			[Display(Name = "E-Mail")]
			public string email { get; set; }

			[Required]
			[DataType(DataType.Password)]
			[RegularExpression(@"^(?=.*\d).{8,18}$", ErrorMessage = "Password must be 8-18 Characters long, and containg at least 1 letter and number.")]
			[Display(Name = "Password")]
			[Compare("confirmpassword", ErrorMessage = "Passwords must match!")]
			public string password { get; set; }

			[Required]
			[DataType(DataType.Password)]
			[Display(Name = "Confirm Password")]
			public string confirmpassword { get; set; }
			decimal num = (decimal)4.7;



		}
}
