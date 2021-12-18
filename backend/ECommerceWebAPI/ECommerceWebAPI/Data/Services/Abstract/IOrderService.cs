using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Abstract
{
    public interface IOrderService
    {
        List<Order> GetAllOrders();
        Order GetOrderById(int Id);

        void Add(Order order);
        void Update(Order order, int Id);
        void Delete(int Id);
    }
}
