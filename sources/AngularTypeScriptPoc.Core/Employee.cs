using System;

namespace AngularTypeScriptPoc.Core
{
	public class Employee
	{
		public Employee(string firstName, string lastName)
		{
			FirstName = firstName;
			LastName = lastName;
		}

		public int Id { get; internal set; }

		public string FirstName { get; set; }

		public string LastName { get; set; } 
	}
}