using System;
using System.Net.Http.Formatting;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularTypeScriptPoc.Web.Common
{
	public static class WebApiConfig
	{
		public static void Register(HttpConfiguration config)
		{
			// configure routing
			config.MapHttpAttributeRoutes();
			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);

			// configure media
			config.Formatters.Clear();
			config.Formatters.Add(new JsonMediaTypeFormatter()
			{
				SerializerSettings = new JsonSerializerSettings()
				{
					ContractResolver = new CamelCasePropertyNamesContractResolver(),
					Formatting = Newtonsoft.Json.Formatting.Indented
				}
			});
		}
	}
}
