using ECommerce.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Data.DAL
{
    public class ECommerceEFContext : DbContext
    {
        public ECommerceEFContext(DbContextOptions<ECommerceEFContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var baseEntityType = typeof(BaseEntity);
            var entitiesAssembly = baseEntityType.Assembly;
            var allTypes = entitiesAssembly.GetTypes();
            var entities = allTypes.Where(q => q.BaseType == baseEntityType && q != baseEntityType).ToList();
            foreach (var entityType in entities)
            {
                UseAsEntity(modelBuilder, entityType);
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }

        private static void UseAsEntity(ModelBuilder modelBuilder, Type type)
        {
            modelBuilder.Entity(type);
        }
    }
}
