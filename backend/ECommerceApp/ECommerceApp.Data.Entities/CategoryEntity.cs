using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApp.Data.Entities
{
    [Table("Categories")]
    public class CategoryEntity : BaseEntity
    {
        public string Name { get; set; }
        public virtual ICollection<ProductEntity> Products { get; set; }
    }
}
