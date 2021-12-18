using ECommerceWebAPI.Data.Services.Concrete;
using ECommerceWebAPI.Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpPost("create-product")]
        public IActionResult AddProduct(string jsonText)
        {
            var entity = Newtonsoft.Json.JsonConvert.DeserializeObject<Product>(jsonText);
            _productService.Add(entity);

            return Ok();
        }

        [HttpPut("update-product-by-id/{id}")]
        public IActionResult UpdateProductById([FromBody] Product product, int id)
        {
            _productService.Update(product, id);
            return Ok();
        }

        [HttpDelete("delete-product-by-id/{id}")]
        public IActionResult DeletProductById(int id)
        {
            _productService.Delete(id);
            return Ok();
        }

        [HttpGet("get-all-products")]
        public IActionResult GetAllProducts()
        {
            var allproducts = _productService.GetAllProducts();
            return Ok(allproducts);
        }

        [HttpGet("get-product-by-id/{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = _productService.GetProductById(id);
            return Ok(product);
        }

        [HttpGet("get-product-by-category-id/{id}")]
        public IActionResult GetProductsByCategoryId(int id)
        {
            var allproducts = _productService.GetAllProductByCategoryId(id);
            return Ok(allproducts);
        }

        [HttpGet("get-diminshing-products")]
        public IActionResult GetDimishingProducts()
        {
            var allproducts = _productService.GetDimishingProducts();
            return Ok(allproducts);
        }

        [HttpGet("get-popular-products")]
        public IActionResult GetPopularProducts()
        {
            var allproducts = _productService.GetPopularProducts();
            return Ok(allproducts);
        }
    }
}
