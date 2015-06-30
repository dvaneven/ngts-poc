using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AngularTypeScriptPoc.Core;
using AngularTypeScriptPoc.Web.Common;
using AngularTypeScriptPoc.Web.Models.Absences;
using AutoMapper;

namespace AngularTypeScriptPoc.Web
{
	public class WebApiApplication : System.Web.HttpApplication
	{
		protected void Application_Start()
		{
			AreaRegistration.RegisterAllAreas();
			GlobalConfiguration.Configure(WebApiConfig.Register);
			FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
			RouteConfig.RegisterRoutes(RouteTable.Routes);
			BundleConfig.RegisterBundles(BundleTable.Bundles);

			// configure automapper
			Mapper.CreateMap<Employee, EmployeeReadModel>();
			Mapper.CreateMap<Absence, AbsenceReadModel>();
		}
	}
}
