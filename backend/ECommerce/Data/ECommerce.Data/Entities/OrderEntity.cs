using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Data.Entities
{
    [Table("Orders")]
    public class OrderEntity : BaseEntity
    {
        public DateTime OrderDate { get; set; }
        public DateTime DeliveryDate { get; set; }
        public int TotalPrice { get; set; }
        public string CardNumber { get; set; }
        public ICollection<ProductEntity> ProductEntities { get; set; }

    }
}
