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
    public class OrdersController : ControllerBase
    {
        public OrderService _orderService;

        public OrdersController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("create-order")]
        public IActionResult AddOrder(string jsonText)
        {
            var entity = Newtonsoft.Json.JsonConvert.DeserializeObject<Order>(jsonText);
            _orderService.Add(entity);

            return Ok();
        }

        [HttpPut("update-order-by-id/{id}")]
        public IActionResult UpdateOrderById([FromBody]Order order, int id)
        {

            _orderService.Update(order, id);
            return Ok();
        }

        [HttpDelete("delete-order-by-id/{id}")]
        public IActionResult DeletOrderById(int id)
        {
            _orderService.Delete(id);
            return Ok();
        }

        [HttpGet("get-all-orders")]
        public IActionResult GetAllOrders()
        {
            var allOrders = _orderService.GetAllOrders();
            return Ok(allOrders);
        }

        [HttpGet("get-order-by-id/{id}")]
        public IActionResult GetorderByID(int id)
        {
            var order = _orderService.GetOrderById(id);
            return Ok(order);
        }
    }
}
