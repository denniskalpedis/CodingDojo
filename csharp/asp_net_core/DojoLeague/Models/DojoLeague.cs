using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace DojoLeague.Models{
	public class Ninja:BaseEntity{
		public int Id {get; set;}
		[Required] 
		public string Name {get; set;}		
		public string Description {get; set;}
		[Required] 
		[Range(1, 10, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
		public int Level {get; set;}
		public Dojo Dojo_Id {get; set;}
	}
	public class Dojo:BaseEntity{
		public int Id {get; set;}
		[Required] 
		public string Name {get; set;}
		[Required] 
		public string Location {get; set;}
		[Required] 
		public string Information {get; set;}
		public List<Ninja> Ninjas {get; set;}
		public Dojo(){
			Ninjas = new List<Ninja>();
		}

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
