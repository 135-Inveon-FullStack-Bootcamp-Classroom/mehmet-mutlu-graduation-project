using ECommerceWebAPI.Data.Services.Abstract;
using ECommerceWebAPI.Data.ViewModels;
using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Concrete
{
    public class ProductService : IProductService
    {
        private ECommerceDBContext _context;

        public ProductService(ECommerceDBContext context)
        {
            _context = context;
        }

        public void Add(ProductVM product)
        {
            var _product = new Product()
            {
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                ImageURLs = product.ImageURLs,
                SoldAmount = product.SoldAmount,
                StockAmount = product.StockAmount,
                CategoryId = product.CategoryId
            };

            _context.Products.Add(_product);
            _context.SaveChanges();
        }

        public void Delete(int Id)
        {
            var _product = _context.Products.FirstOrDefault(product => product.Id == Id);
            if (_product != null)
            {
                _context.Products.Remove(_product);

                _context.SaveChanges();
            }
        }

        public List<Product> GetAllProductByCategoryId(int Id)
        {
            return _context.Products.Where(product => product.CategoryId == Id).ToList();
        }

        public List<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }

        public List<Product> GetDimishingProducts()
        {
            return _context.Products.Where(product => product.StockAmount <= 10).ToList();
        }

        public List<Product> GetPopularProducts()
        {
            return _context.Products.Where(product => product.SoldAmount >= 20).ToList();
        }

        public Product GetProductById(int Id)
        {
            return _context.Products.FirstOrDefault(product => product.Id == Id);
        }

        public void Update(ProductVM product, int Id)
        {
            var _product = _context.Products.FirstOrDefault(product => product.Id == Id);
            if (_product != null)
            {
                _product.Name = product.Name;
                _product.Description = product.Description;
                _product.Price = product.Price;
                _product.ImageURLs = product.ImageURLs;
                _product.SoldAmount = product.SoldAmount;
                _product.StockAmount = product.StockAmount;
                _product.CategoryId = product.CategoryId;

                _context.SaveChanges();
            }
        }
    }
}
