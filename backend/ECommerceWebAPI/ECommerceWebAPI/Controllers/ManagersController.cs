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
    public class ManagersController : ControllerBase
    {
        public ManagerService _managerService;

        public ManagersController(ManagerService managerService)
        {
            _managerService = managerService;
        }

        [HttpPost("create-manager")]
        public IActionResult AddManager(string jsonText)
        {
            var entity = Newtonsoft.Json.JsonConvert.DeserializeObject<Manager>(jsonText);
            _managerService.Add(entity);

            return Ok();
        }

        [HttpPut("update-manager-by-id/{id}")]
        public IActionResult UpdateManagerById([FromBody] Manager manager, int id)
        {

            _managerService.Update(manager, id);
            return Ok();
        }

        [HttpDelete("delete-manager-by-id/{id}")]
        public IActionResult DeletManagerById(int id)
        {
            _managerService.Delete(id);
            return Ok();
        }

        [HttpGet("get-all-managers")]
        public IActionResult GetAllManagers()
        {
            var allmanagers = _managerService.GetAllManagers();
            return Ok(allmanagers);
        }

        [HttpGet("get-manager-by-id/{id}")]
        public IActionResult GetmMnagerByID(int id)
        {
            var manager = _managerService.GetManagerById(id);
            return Ok(manager);
        }

        [HttpGet("get-manager-by-email/{email}")]
        public IActionResult GetManagerByEmail(string email)
        {
            var manager = _managerService.GetManagerByEmail(email);
            return Ok(manager);
        }
    }
}
