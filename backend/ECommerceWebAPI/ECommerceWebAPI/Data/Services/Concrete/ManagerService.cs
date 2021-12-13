using ECommerceWebAPI.Data.Services.Abstract;
using ECommerceWebAPI.Data.ViewModels;
using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Concrete
{
    public class ManagerService : IManagerService
    {
        private ECommerceDBContext _context;

        public ManagerService(ECommerceDBContext context)
        {
            _context = context;
        }
        public void Add(ManagerVM manager)
        {
            var _manager = new Manager()
            {
                Email = manager.Email,
                Password = manager.Password,
                Authorization = manager.Authorization,
                FirstName = manager.FirstName,
                LastName = manager.LastName
            };

            _context.Managers.Add(_manager);
            _context.SaveChanges();
        }

        public void Delete(int Id)
        {
            var _manager = _context.Managers.FirstOrDefault(manager => manager.Id == Id);
            if (_manager != null)
            {
                _context.Managers.Remove(_manager);

                _context.SaveChanges();
            }
        }

        public List<Manager> GetAllManagers()
        {
            return _context.Managers.ToList();
        }

        public Manager GetManagerByEmail(string email)
        {
            return _context.Managers.FirstOrDefault(manager => manager.Email == email);
        }

        public Manager GetManagerById(int Id)
        {
            return _context.Managers.FirstOrDefault(manager => manager.Id == Id);
        }

        public void Update(ManagerVM manager, int Id)
        {
            var _manager = _context.Managers.FirstOrDefault(manager => manager.Id == Id);
            if (_manager != null)
            {
                _manager.Email = manager.Email;
                _manager.Password = manager.Password;
                _manager.Authorization = manager.Authorization;
                _manager.FirstName = manager.FirstName;
                _manager.LastName = manager.LastName;

                _context.SaveChanges();
            }
        }
    }
}
