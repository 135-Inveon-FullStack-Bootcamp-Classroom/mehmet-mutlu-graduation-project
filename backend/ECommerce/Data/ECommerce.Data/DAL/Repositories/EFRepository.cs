using ECommerce.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Data.DAL.Repositories
{
    public class EFRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly ECommerceEFContext _context;
        private readonly DbSet<TEntity> _dbSet;
        public EFRepository(ECommerceEFContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }
        public void Add(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public void Delete(int Id)
        {
            var entity = GetById(Id);
            Delete(entity);
        }

        public void Delete(TEntity entity)
        {
            if (entity == null)
            {
                return;
            }
            _dbSet.Remove(entity);
        }

        public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate = null)
        {
            if (predicate != null)
            {
                return _dbSet.Where(predicate);
            }
            return _dbSet;
        }

        public List<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }

        public TEntity GetById(int Id)
        {
            return _dbSet.Find(Id);
        }

        public void Update(TEntity entity)
        {
            _dbSet.Update(entity);
        }
    }
}
