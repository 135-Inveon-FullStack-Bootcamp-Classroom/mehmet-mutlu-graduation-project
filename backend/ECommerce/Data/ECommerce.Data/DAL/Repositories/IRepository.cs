using ECommerce.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Data.DAL.Repositories
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        List<TEntity> GetAll();
        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate = null);
        TEntity GetById(int Id);

        void Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(int Id);
        void Delete(TEntity entity);
    }
}
