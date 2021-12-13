using ECommerceWebAPI.Data.Services.Abstract;
using ECommerceWebAPI.Data.ViewModels;
using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Concrete
{
    public class CategoryService : ICategoryService
    {
        private ECommerceDBContext _context;

        public CategoryService(ECommerceDBContext context)
        {
            _context = context;
        }
        public void Add(CategoryVM category)
        {

            var _category = new Category()
            {
                Name = category.Name,
            };

            _context.Categories.Add(_category);
            _context.SaveChanges();
        }

        public void Delete(int Id)
        {
            var _category = _context.Categories.FirstOrDefault(category => category.Id == Id);
            if (_category != null)
            {
                _context.Categories.Remove(_category);

                _context.SaveChanges();
            }
        }

        public List<Category> GetAllCategories()
        {
            return _context.Categories.ToList();
        }

        public Category GetCategoryById(int Id)
        {
            return _context.Categories.FirstOrDefault(category => category.Id == Id);
        }

        public void Update(CategoryVM category, int Id)
        {
            var _category = _context.Categories.FirstOrDefault(category => category.Id == Id);
            if (_category != null)
            {
                _category.Name = category.Name;

                _context.SaveChanges();
            }
        }
    }
}
