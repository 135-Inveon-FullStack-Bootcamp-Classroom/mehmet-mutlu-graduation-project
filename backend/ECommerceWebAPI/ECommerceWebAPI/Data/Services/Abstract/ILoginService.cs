using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Abstract
{
    public interface ILoginService
    {
        bool CheckManagerLogin(string email, string password);
    }
}
