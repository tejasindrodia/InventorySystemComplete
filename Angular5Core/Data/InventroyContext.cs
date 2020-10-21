using Microsoft.EntityFrameworkCore;

namespace Angular5Core.Data
{
    public class InventoryContext : DbContext
    {
        public InventoryContext(DbContextOptions<InventoryContext> options)
                  : base(options) { }

        public InventoryContext()
        {
        }

        public DbSet<InventoryMaster> InventoryMaster { get; set; }
        public DbSet<UserLogin> UserLogin { get; set; }

        //public virtual ObjectResult<Usp_Login_Result> Usp_Login(string userName, string password)
        //{
        //    var userNameParameter = userName != null ?
        //        new ObjectParameter("UserName", userName) :
        //        new ObjectParameter("UserName", typeof(string));

        //    var passwordParameter = password != null ?
        //        new ObjectParameter("Password", password) :
        //        new ObjectParameter("Password", typeof(string));

        //    return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Usp_Login_Result>("Usp_Login", userNameParameter, passwordParameter);
        //}
    }
}