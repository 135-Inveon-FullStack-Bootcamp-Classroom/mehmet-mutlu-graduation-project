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
    public class CategoriesController : ControllerBase
    {
        public CategoryService _categoryService;

        public CategoriesController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost("create-category")]
        public IActionResult AddCategory(string jsonText)
        {
            var entity = Newtonsoft.Json.JsonConvert.DeserializeObject<Category>(jsonText);
            _categoryService.Add(entity);

            return Ok();
        }

        [HttpPut("update-category-by-id/{id}")]
        public IActionResult UpdateCategoryById([FromBody] Category category, int id)
        {

            _categoryService.Update(category, id);
            return Ok();
        }

        [HttpDelete("delete-category-by-id/{id}")]
        public IActionResult DeletCategoryById(int id)
        {
            _categoryService.Delete(id);
            return Ok();
        }

        [HttpGet("get-all-categorys")]
        public IActionResult GetAllCategorys()
        {
            var allcategorys = _categoryService.GetAllCategories();
            return Ok(allcategorys);
        }

        [HttpGet("get-category-by-id/{id}")]
        public IActionResult GetCategoryByID(int id)
        {
            var category = _categoryService.GetCategoryById(id);
            return Ok(category);
        }
    }
}
