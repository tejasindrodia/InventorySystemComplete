using Angular5Core.Data;
using Angular5Core.Models;

//using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace Angular5Core.Controllers
{
    [Route("api/Login")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private readonly InventoryContext _context;

        public LoginController(InventoryContext context)
        {
            _context = context;
        }

        //For user login
        [Route("UserLogin1")]
        [System.Web.Http.HttpPost]
        //[HttpGet]
        public ObjectResult Login1(Login Lg)
        {
            Response Response;
            var userNameParameter = Lg.UserName != null ?
              new SqlParameter("UserName", Lg.UserName) :
              new SqlParameter("UserName", typeof(string));

            var passwordParameter = Lg.Password != null ?
                new SqlParameter("Password", Lg.Password) :
                new SqlParameter("Password", typeof(string));

            //var Obj  = _context.UserLogin.FromSql("Exec Usp_Login", userNameParameter, passwordParameter).ToList().FirstOrDefault();//

            var Obj = _context.UserLogin.FirstOrDefault(t => t.LoginName == Lg.UserName && t.Password == Lg.Password);

            if (Obj.Status == 0)
                Response = null;
            if (Obj.Status == -1)
                Response = new Response
                {
                    Status = "Inactive",
                    Message = "User Inactive."
                };
            else
                Response = new Response
                {
                    Status = "Success",
                    Message = Lg.UserName
                };

            if (Response.Status == "Success")
            {
                return Ok(Response);
            }
            else
            {
                return NotFound(Response);
            }
        }

        //For user login
        [Route("UserLogin")]
        [System.Web.Http.HttpPost]
        //[HttpGet]
        public int Login(Login Lg)
        {
            var userNameParameter = Lg.UserName != null ?
              new SqlParameter("UserName", Lg.UserName) :
              new SqlParameter("UserName", typeof(string));

            var passwordParameter = Lg.Password != null ?
                new SqlParameter("Password", Lg.Password) :
                new SqlParameter("Password", typeof(string));

            //var Obj  = _context.UserLogin.FromSql("Exec Usp_Login", userNameParameter, passwordParameter).ToList().FirstOrDefault();//

            var Obj = _context.UserLogin.FirstOrDefault(t => t.LoginName == Lg.UserName && t.Password == Lg.Password);

            if (Obj != null)
                return int.Parse(Obj?.Status.ToString());
            else
                return 0;
        }

        //For new user Registration
        [Route("Api/Login/UserRegistration")]
        [System.Web.Http.HttpPost]
        // public object createcontact(Registration Lvm)
        public object createcontact()
        {
            try
            {
                //EmployeeEntities db = new EmployeeEntities();
                //Employeemaster Em = new Employeemaster();
                //if (Em.UserId == 0)
                //{
                //    Em.UserName = Lvm.UserName;
                //    Em.LoginName = Lvm.LoginName;
                //    Em.Password = Lvm.Password;
                //    Em.Email = Lvm.Email;
                //    Em.ContactNo = Lvm.ContactNo;
                //    Em.Address = Lvm.Address;
                //    Em.IsApporved = Lvm.IsApporved;
                //    Em.Status = Lvm.Status;
                //    db.Employeemasters.Add(Em);
                //    db.SaveChanges();
                //    return new Response
                //    {
                //        Status = "Success",
                //        Message = "SuccessFully Saved."
                //    };
                //}
            }
            catch (Exception)
            {
                throw;
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }
    }
}