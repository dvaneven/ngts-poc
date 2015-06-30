using System;

namespace AngularTypeScriptPoc.Web.Models.Absences
{
	public class AbsenceReadModel
	{
		public int Id { get; set; }

		public EmployeeReadModel Employee { get; set; }

		public int AbsenceType { get; set; }

		public DateTime BeginDate { get; set; }

		public DateTime EndDate { get; set; }

		public string Remark { get; set; }

		public int AbsenceStatus { get; set; }
	}
}