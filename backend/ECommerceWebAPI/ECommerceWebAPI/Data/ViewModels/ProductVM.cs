using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data.ViewModels
{
    public class ProductVM
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public int StockAmount { get; set; }
        public int SoldAmount { get; set; }
        public string ImageURLs { get; set; }
        public int CategoryId { get; set; }
    }
}
