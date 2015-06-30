using System;
using System.Web.Mvc;

namespace AngularTypeScriptPoc.Web.Common
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}
