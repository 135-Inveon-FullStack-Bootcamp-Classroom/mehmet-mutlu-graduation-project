using AutoMapper;
using ECommerce.Business.Engines.Interfaces;
using ECommerce.Business.Engines.Models.Product;
using ECommerce.Data.DAL.UnitOfWork;
using ECommerce.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Business.Engines.Implementations
{
    public class CatalogEngine : ICatalogEngine
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public CatalogEngine(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public List<ProductViewModel> GetProductListByCategoryIdForCatalog(int categoryId)
        {
            var productRepository = _unitOfWork.GetRepository<ProductEntity>();
            var products = productRepository.Get(q => q.CategoryId == categoryId)
                .Select(product => _mapper.Map<ProductViewModel>(product)).ToList();
            return products;
        }
    }
}
