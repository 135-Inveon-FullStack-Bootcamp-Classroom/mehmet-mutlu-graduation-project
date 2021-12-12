using ECommerce.Business.Engines.Models.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Business.Engines.Interfaces
{
    public interface ICategoryEngine : IEngineBase
    {

        List<ProductViewModel> GetProductListByCategoryId(int categoryId);
    }
}
