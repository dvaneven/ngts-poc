using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularTypeScriptPoc.Core.Repositories
{
	public static class AbsenceRepository
	{
		// initial data
		private static readonly List<Absence> Absences = new List<Absence>()
		{
			new Absence(EmployeeRepository.FindById(1), AbsenceType.AnnualLeave, DateTime.Today.AddDays(10), DateTime.Today.AddDays(20)) { Id = 1, AbsenceStatus = AbsenceStatus.Approved },
			new Absence(EmployeeRepository.FindById(2), AbsenceType.CarersLeave, DateTime.Today.AddDays(-10), DateTime.Today.AddDays(-11)) { Id = 2 },
			new Absence(EmployeeRepository.FindById(3), AbsenceType.ParentalLeave, DateTime.Today.AddDays(3), DateTime.Today.AddDays(3)) { Id = 3 },
			new Absence(EmployeeRepository.FindById(6), AbsenceType.SickLeave, DateTime.Today.AddDays(15), DateTime.Today.AddDays(15)) { Id = 4, AbsenceStatus = AbsenceStatus.Rejected }
		};


		public static Absence FindById(int id)
		{
			return Absences.SingleOrDefault(a => a.Id == id);
		}


		public static IList<Absence> FindAll()
		{
			return Absences;
		}


		public static void Add(Absence absence)
		{
			if (absence == null)
				throw new ArgumentNullException("absence");

			// compute next id
			absence.Id = Absences.Any() ? Absences.Max(a => a.Id) + 1 : 1;

			Absences.Add(absence);
		}


		public static bool Delete(int id)
		{
			return Absences.Remove(FindById(id));
		}
	}
}