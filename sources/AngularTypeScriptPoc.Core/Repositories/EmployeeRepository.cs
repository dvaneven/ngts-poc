using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularTypeScriptPoc.Core.Repositories
{
	public static class EmployeeRepository
	{
		// initial data
		private static readonly List<Employee> Employees = new List<Employee>()
		{
			new Employee("Wim", "De Houwer") { Id = 1 },
			new Employee("Serge", "De Backer") { Id = 2 },
			new Employee("Leen", "Vandepoel") { Id = 3 },
			new Employee("Filip", "Tollenaere") { Id = 4 },
			new Employee("Hilke", "Heremans") { Id = 5 },
			new Employee("Dave", "Van Even") { Id = 6 }
		};


		public static Employee FindById(int id)
		{
			return Employees.SingleOrDefault(e => e.Id == id);
		}


		public static IList<Employee> FindAll()
		{
			return Employees;
		}
	}
}