using System;

namespace AngularTypeScriptPoc.Core
{
	public class Absence
	{
		public Absence(Employee employee, AbsenceType absenceType, DateTime beginDate, DateTime endDate)
		{
			Employee = employee;
			AbsenceType = absenceType;
			BeginDate = beginDate;
			EndDate = endDate;
			AbsenceStatus = AbsenceStatus.Pending;
		}


		public int Id { get; internal set; }

		public Employee Employee { get; set; }

		public AbsenceType AbsenceType { get; set; }

		public DateTime BeginDate { get; set; }

		public DateTime EndDate { get; set; }

		public string Remark { get; set; }

		public AbsenceStatus AbsenceStatus { get; set; }
	}
}
