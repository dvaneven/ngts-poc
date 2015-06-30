using System;

namespace AngularTypeScriptPoc.Web.Models.Absences
{
	public class AbsenceWriteModel
	{
		public Entity Employee { get; set; }

		public string AbsenceType { get; set; }

		public DateTime BeginDate { get; set; }

		public DateTime EndDate { get; set; }

		public string Remark { get; set; }
	}
}