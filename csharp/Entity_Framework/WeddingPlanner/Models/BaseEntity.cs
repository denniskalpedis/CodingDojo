using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System;

namespace WeddingPlanner.Models{
	public abstract class BaseEntity{
		public int id{get;set;}
		public DateTime created_at = DateTime.Now;

		public DateTime updated_at {get; set;}
		public BaseEntity (){
			updated_at = DateTime.Now;
		}
	}
}
