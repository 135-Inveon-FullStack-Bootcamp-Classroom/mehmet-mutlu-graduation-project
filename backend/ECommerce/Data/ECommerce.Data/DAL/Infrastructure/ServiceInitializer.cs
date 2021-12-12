using ECommerce.Data.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerce.Data.DAL.Infrastructure
{
    public static class ServiceInitializer
    {
        public static void AddDAL(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("ConnStr");
            services.AddDbContext<ECommerceEFContext>(option => option.UseSqlServer(connectionString));
            services.AddScoped<IUnitOfWork, EFUnitOfWork>();
        }
    }
}
