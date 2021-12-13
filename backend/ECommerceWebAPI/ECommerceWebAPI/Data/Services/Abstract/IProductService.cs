using ECommerceWebAPI.Data.ViewModels;
using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Abstract
{
    public interface IProductService
    {
        List<Product> GetAllProducts();
        List<Product> GetAllProductByCategoryId(int Id);
        Product GetProductById(int Id);
        List<Product> GetPopularProducts();
        List<Product> GetDimishingProducts();

        void Add(ProductVM product);
        void Update(ProductVM product, int Id);
        void Delete(int Id);
    }
}
