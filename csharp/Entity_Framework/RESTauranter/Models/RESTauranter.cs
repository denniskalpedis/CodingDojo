using System.ComponentModel.DataAnnotations;
using System;

namespace RESTauranter.Models{
	public class Reviews:BaseEntity{
		public int id {get; set;}
		[Required]
		[Display(Name = "Name")]
		public string user_name {get; set;}
		[Required]
		[Display(Name = "Restaurant Name")]
		public string restaurant_name {get; set;}
		[Required]
		[Display(Name = "Review")]
		public string review {get; set;}
		[Required]
		[Display(Name = "Date Visited")]
		[DataType(DataType.Date)]
		public DateTime? date {get; set;}
		[Required]
		[Range(1, 5, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
		public int? stars {get; set;}
		public DateTime created_at = DateTime.Now;
		public DateTime updated_at = DateTime.Now;


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
}
