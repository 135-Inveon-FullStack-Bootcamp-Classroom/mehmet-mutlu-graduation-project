using ECommerceWebAPI.Data.ViewModels;
using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Abstract
{
    public interface ICategoryService
    {
        List<Category> GetAllCategories();
        Category GetCategoryById(int Id);

        void Add(CategoryVM category);
        void Update(CategoryVM category, int Id);
        void Delete(int Id);
    }
}
