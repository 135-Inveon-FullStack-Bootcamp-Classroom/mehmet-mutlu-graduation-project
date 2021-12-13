using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.ViewModels
{
    public class OrderVM
    {
        public DateTime OrderDate { get; set; }
        public DateTime DeliveryDate { get; set; }
        public int TotalPrice { get; set; }
        public string CardNumber { get; set; }
    }
}
