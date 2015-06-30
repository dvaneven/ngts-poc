using System;
using System.Linq;
using System.Web.Http;
using AngularTypeScriptPoc.Core.Repositories;
using AngularTypeScriptPoc.Web.Models.Absences;
using AutoMapper;

namespace AngularTypeScriptPoc.Web.Controllers
{
	public class EmployeesController : ApiController
	{
		[Route("api/employees")]
		public IHttpActionResult Get()
		{
			// find all employees
			var employees = EmployeeRepository.FindAll();

			// map to model
			var employeeReadModels = employees.Select(Mapper.Map<EmployeeReadModel>);

			return Ok(employeeReadModels);
		}


		[Route("api/employees/{id}")]
		public IHttpActionResult GetById(int id)
		{
			// find employee
			var employee = EmployeeRepository.FindById(id);

			// existence check
			if (employee == null)
				return NotFound();

			// map to model
			var employeeReadModel = Mapper.Map<EmployeeReadModel>(employee);

			return Ok(employeeReadModel);
		}
	}
}