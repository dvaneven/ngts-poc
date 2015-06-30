using System;
using System.Linq;
using System.Web.Http;
using AngularTypeScriptPoc.Core;
using AngularTypeScriptPoc.Core.Repositories;
using AngularTypeScriptPoc.Web.Models.Absences;
using AutoMapper;

namespace AngularTypeScriptPoc.Web.Controllers
{
	public class AbsencesController : ApiController
	{
		[Route("api/absences")]
		public IHttpActionResult Get()
		{
			// find all absences
			var absences = AbsenceRepository.FindAll();

			// map to model
			var absenceReadModels = absences.Select(Mapper.Map<AbsenceReadModel>);

			return Ok(absenceReadModels);
		}


		[Route("api/absences/{id}")]
		public IHttpActionResult GetById(int id)
		{
			// find absence
			var absence = AbsenceRepository.FindById(id);

			// existence check
			if (absence == null)
				return NotFound();

			// map to model
			var absenceReadModel = Mapper.Map<AbsenceReadModel>(absence);

			return Ok(absenceReadModel);
		}

		[Route("api/absences", Name="PostAbsence")]
		public IHttpActionResult Post(AbsenceWriteModel absenceWriteModel)
		{
			// find employee
			var employee = EmployeeRepository.FindById(absenceWriteModel.Employee.Id);

			// validate existence of employee
			if (employee == null)
				return BadRequest(string.Format("Cannot find employee with id '{0}'.", absenceWriteModel.Employee.Id));

			// create new absence 
			var absence = new Absence(employee, 
				(AbsenceType)Enum.Parse(typeof(AbsenceType), absenceWriteModel.AbsenceType),
				absenceWriteModel.BeginDate, absenceWriteModel.EndDate);
			absence.Remark = absenceWriteModel.Remark;

			// add absence
			AbsenceRepository.Add(absence);

			// map to model
			var absenceReadModel = Mapper.Map<AbsenceReadModel>(absence);

			return CreatedAtRoute("PostAbsence", new { id = absenceReadModel.Id }, absenceReadModel);
		}


		[Route("api/absences/{id}")]
		public IHttpActionResult Put(int id, AbsenceWriteModel absenceWriteModel)
		{
			// find employee
			var employee = EmployeeRepository.FindById(absenceWriteModel.Employee.Id);

			// validate existence of employee
			if (employee == null)
				return BadRequest(string.Format("Cannot find employee with id '{0}'.", absenceWriteModel.Employee.Id));

			// find absence
			var absence = AbsenceRepository.FindById(id);

			// existence check
			if (absence == null)
				return NotFound();

			// map from model
			absence.Employee = employee;
			absence.AbsenceType = (AbsenceType)Enum.Parse(typeof(AbsenceType), absenceWriteModel.AbsenceType);
			absence.BeginDate = absenceWriteModel.BeginDate;
			absence.EndDate = absenceWriteModel.EndDate;
			absence.Remark = absenceWriteModel.Remark;

			return Ok();
		}


		[Route("api/absences/{id}")]
		public IHttpActionResult Delete(int id)
		{
			// delete absence
			AbsenceRepository.Delete(id);

			return Ok();
		}


		[Route("api/absences/{id}/approve")]
		public IHttpActionResult PostApprove(int id)
		{
			// find absence
			var absence = AbsenceRepository.FindById(id);

			// existence check
			if (absence == null)
				return NotFound();

			// approve absence
			absence.AbsenceStatus = AbsenceStatus.Approved;

			// map to model
			var absenceReadModel = Mapper.Map<AbsenceReadModel>(absence);

			return Ok(absenceReadModel);
		}


		[Route("api/absences/{id}/reject")]
		public IHttpActionResult PostReject(int id)
		{
			// find absence
			var absence = AbsenceRepository.FindById(id);

			// existence check
			if (absence == null)
				return NotFound();

			// approve absence
			absence.AbsenceStatus = AbsenceStatus.Rejected;

			// map to model
			var absenceReadModel = Mapper.Map<AbsenceReadModel>(absence);

			return Ok(absenceReadModel);
		}
	}
}