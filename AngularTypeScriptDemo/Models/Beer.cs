using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularTypeScriptDemo.Models
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Colour { get; set; }
        public bool HasTried { get; set; }
    }
}