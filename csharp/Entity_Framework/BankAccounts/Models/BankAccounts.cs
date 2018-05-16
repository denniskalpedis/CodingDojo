using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;


namespace BankAccounts.Models{
	public class BankAccounts:BaseEntity{
		public User owner{get;set;}

	}
	public class User:BaseEntity{
		public string first_name{get;set;}
		public string last_name{get;set;}
		public string email{get;set;}
		public string password{get;set;}
		public double? balance{get;set;}
		public List<Transaction> transactions {get;set;}
		public User (){
			transactions = new List<Transaction>();
		}

		
	}
	public class Transaction:BaseEntity{
		public double? amount{get;set;}
		public int userid{get;set;}
		public User user{get;set;}
	}
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
