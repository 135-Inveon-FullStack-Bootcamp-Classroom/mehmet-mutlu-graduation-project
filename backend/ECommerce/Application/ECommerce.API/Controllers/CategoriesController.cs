using ECommerce.Business.Engines.Interfaces;
using ECommerce.Business.Engines.Models.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.API.Controllers
{
    public class CategoriesController : BaseController
    {
        private readonly ICatalogEngine _catalogEngine;
        public CategoriesController(ICatalogEngine catalogEngine)
        {
            _catalogEngine = catalogEngine;
        }

        [HttpGet("{id}/products")]
        public List<ProductViewModel> GetCategoryProducts(int id)
        {
            var data = _catalogEngine.GetProductListByCategoryIdForCatalog(id);
            return data;
        }
    }
}
