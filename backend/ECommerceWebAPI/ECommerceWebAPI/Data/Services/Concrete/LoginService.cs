using ECommerceWebAPI.Data.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Concrete
{
    public class LoginService : ILoginService
    {
        private ECommerceDBContext _context;

        public LoginService(ECommerceDBContext context)
        {
            _context = context;
        }
        public bool CheckManagerLogin(string email, string password)
        {
            var loginResult = false;
            var manager = _context.Managers.FirstOrDefault(manager => manager.Email == email && manager.Password == password);

            if (manager != null)
            {
                loginResult = true;
            }

            return loginResult;
        }
    }
}
