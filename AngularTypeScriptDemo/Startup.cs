using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularTypeScriptDemo.Startup))]
namespace AngularTypeScriptDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
