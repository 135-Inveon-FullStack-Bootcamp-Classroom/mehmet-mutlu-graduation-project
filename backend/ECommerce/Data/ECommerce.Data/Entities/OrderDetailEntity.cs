using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Data.Entities
{   
    [Table("OrderDetails")]
    public class OrderDetailEntity : BaseEntity
    {
        public int OrderId { get; set; }
        public virtual OrderEntity Order { get; set; }
        public int ProductId { get; set; }
        public virtual ProductEntity Product { get; set; }

    }
}
