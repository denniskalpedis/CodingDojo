using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System;

namespace WeddingPlanner.Models{
	public class WeddingPlanner:BaseEntity{

	}
	public class User:BaseEntity{
		public string first_name{get;set;}
		public string last_name{get;set;}
		public string email{get;set;}
		public string password{get;set;}
		public List<RSVP> weddings{get;set;}

		public User(){
			weddings = new List<RSVP>();
		}
	}

	public class Wedding:BaseEntity{
		public string wedderone{get;set;}
		public string weddertwo{get;set;}
		public DateTime? date{get;set;}
		public string address{get;set;}
		public int? userid{get;set;}
		public User creator{get;set;}
		public List<RSVP> attendees{get;set;}
		public Wedding(){
			attendees = new List<RSVP>();
		}
	}

	public class RSVP:BaseEntity{
		public int? userid{get;set;}
		public User user{get;set;}
		public int? weddingid{get;set;}
		public Wedding wedding{get;set;}
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

	PostGres Migrations:

	dotnet ef migrations add FirstMigration - Creates a migration. Requires at least one model in advance.
	dotnet ef database update - Applies migrations much like Django's "migrate" command.
*/
}
