using ECommerceWebAPI.Data;
using ECommerceWebAPI.Data.Services.Concrete;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI
{
    public class Startup
    {
        public string ConnectionString { get; set; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            ConnectionString = Configuration.GetConnectionString("DefaultConnectionString");
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Configure DBContext with SQL
            services.AddDbContext<ECommerceDBContext>(options => options.UseSqlServer(ConnectionString));

            services.AddTransient<ProductService>();
            services.AddTransient<ManagerService>();
            services.AddTransient<CategoryService>();
            services.AddTransient<LoginService>();
            services.AddTransient<OrderService>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ECommerceWebAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ECommerceWebAPI v1"));
            }

            app.UseCors(options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            ECommerceDBInitializer.Seed(app);
        }
    }
}
