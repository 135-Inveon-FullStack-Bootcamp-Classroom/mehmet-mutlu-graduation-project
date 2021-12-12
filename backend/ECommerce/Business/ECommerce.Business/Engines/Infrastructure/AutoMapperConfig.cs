using AutoMapper;
using ECommerce.Business.Engines.Models.Product;
using ECommerce.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Business.Engines.Infrastructure
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<ProductEntity, ProductViewModel>();
            CreateMap<CategoryEntity, ProductViewModel.ProductCategoryModel>();
        }
    }
}
