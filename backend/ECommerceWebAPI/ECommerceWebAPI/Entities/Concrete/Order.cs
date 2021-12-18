using ECommerceWebAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Entities.Concrete
{
    public enum PaymentType
    {
        CreditCard = 1,
        PayAtDoor = 2
    }
    public class Order : IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string UserFullName { get; set; }
        public string TelephoneNumber { get; set; }
        public string Address { get; set; }
        public string UserEmail { get; set; }
        public decimal TotalPrice { get; set; }
        public PaymentType PaymentType { get; set; }

        public virtual List<OrderDetail> OrderDetails { get; set; }
    }
}
