using ECommerceWebAPI.Data.Services.Abstract;
using ECommerceWebAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.Services.Concrete
{
    public class OrderService : IOrderService
    {
        private ECommerceDBContext _context;

        public OrderService(ECommerceDBContext context)
        {
            _context = context;
        }

        public void Add(Order order)
        {
            _context.Orders.Add(order);

            _context.SaveChanges();
        }

        public void Delete(int Id)
        {
            var _order = _context.Orders.FirstOrDefault(order => order.Id == Id);
            if (_order != null)
            {
                var orderDetails = _context.OrderDetails.Where(orderDetail => orderDetail.OrderId == Id).ToList();
                foreach (var item in orderDetails)
                {
                    _context.OrderDetails.Remove(item);
                }
                _context.Orders.Remove(_order);

                _context.SaveChanges();
            }
        }

        public List<Order> GetAllOrders()
        {
            return _context.Orders.ToList();
        }

        public Order GetOrderById(int Id)
        {
            return _context.Orders.FirstOrDefault(order => order.Id == Id);
        }

        public void Update(Order order, int Id)
        {
            var _order = _context.Orders.FirstOrDefault(order => order.Id == Id);
            if (_order != null)
            {
                _order.Address = order.Address;
                _order.UserEmail = order.UserEmail;
                _order.UserFullName = order.UserFullName;
                _order.PaymentType = order.PaymentType;
                _order.DeliveryDate = order.DeliveryDate;

                _context.SaveChanges();
            }
        }
    }
}
