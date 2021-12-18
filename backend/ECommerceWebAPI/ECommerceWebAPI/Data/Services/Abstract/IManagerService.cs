using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Abstract
{
    public interface IManagerService
    {
        List<Manager> GetAllManagers();
        Manager GetManagerById(int Id);
        Manager GetManagerByEmail(string email);

        void Add(Manager manager);
        void Update(Manager manager, int Id);
        void Delete(int Id);
    }
}
