using ECommerceWebAPI.Entities.Concrete;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Data
{
    public class ECommerceDBInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<ECommerceDBContext>();

                if (!context.Products.Any())
                {
                    context.Products.AddRange(new Product()
                    {
                        Name = "IPhone 11",
                        Description = "Yepyeni IPhone 11 64 GB Beyaz renk!",
                        Price = 14000,
                        StockAmount = 100,
                        SoldAmount = 90,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113156-1_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "IPhone 12",
                        Description = "Yepyeni IPhone 12 64 GB Beyaz renk!",
                        Price = 19500,
                        StockAmount = 150,
                        SoldAmount = 40,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/iphone12-gorseli-110622_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "IPhone 12 Mini",
                        Description = "Yepyeni IPhone 12 Mini 64 GB Siyah renk!",
                        Price = 18000,
                        StockAmount = 200,
                        SoldAmount = 60,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/110393_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "IPhone 13",
                        Description = "Yepyeni IPhone 13 128 GB Beyaz renk!",
                        Price = 21500,
                        StockAmount = 100,
                        SoldAmount = 10,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/bas-lik-6_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "IPhone 13 Mini",
                        Description = "Yepyeni IPhone 13 Mini 256 GB Kırmızı renk!",
                        Price = 21900,
                        StockAmount = 100,
                        SoldAmount = 15,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129894-7_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "IPhone 13 Pro",
                        Description = "Yepyeni IPhone 13 Pro 128 GB Siyah renk!",
                        Price = 29000,
                        StockAmount = 100,
                        SoldAmount = 5,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/pro_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "IPhone 13 Pro Max",
                        Description = "Yepyeni IPhone 13 Pro Max 128 GB Siyah renk!",
                        Price = 32000,
                        StockAmount = 100,
                        SoldAmount = 5,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/pro_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "Samsung Galaxy S20 Fe",
                        Description = "Yepyeni Samsung Galaxy S20 Fe 128 GB Lacivert renk!",
                        Price = 8190,
                        StockAmount = 200,
                        SoldAmount = 85,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/128245_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "Samsung Galaxy S20 Fe",
                        Description = "Yepyeni Samsung Galaxy S20 Fe 128 GB Lavanta renk!",
                        Price = 8190,
                        StockAmount = 200,
                        SoldAmount = 100,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/128244_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "Samsung Galaxy A72",
                        Description = "Yepyeni Samsung Galaxy A72 128 GB Mavi renk!",
                        Price = 6700,
                        StockAmount = 200,
                        SoldAmount = 115,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/121860_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "Samsung Galaxy A72",
                        Description = "Yepyeni Samsung Galaxy A72 128 GB Beyaz renk!",
                        Price = 6700,
                        StockAmount = 200,
                        SoldAmount = 185,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/121861_large.jpg",
                        CategoryId = 1
                    }, new Product()
                    {
                        Name = "SAMSUNG QE 65Q60T",
                        Description = "SAMSUNG QE 65Q60T 65inç 163 cm 4K UHD Smart QLED TV, Dahili Uydu Alıcılı",
                        Price = 13400,
                        StockAmount = 30,
                        SoldAmount = 15,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/samsung-qe-65q60t-gorseli-108752_large.jpg",
                        CategoryId = 2
                    }, new Product()
                    {
                        Name = "PHILIPS 58PUS8506",
                        Description = "PHILIPS 58PUS8506 58inç 146 cm 4K UHD Android TV, 3 taraflı ambilight, Dahili Uydu Alıcılı",
                        Price = 12500,
                        StockAmount = 20,
                        SoldAmount = 15,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/129542-1-5_large.jpg",
                        CategoryId = 2
                    }, new Product()
                    {
                        Name = "SAMSUNG QE 65Q95T",
                        Description = "SAMSUNG QE 65Q95T 65inç 163 cm 4K UHD Smart QLED TV, Dahili Uydu Alıcılı",
                        Price = 18000,
                        StockAmount = 40,
                        SoldAmount = 35,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/samsiung-qe-65q95t-gorseli-107842_large.jpg",
                        CategoryId = 2
                    }, new Product()
                    {
                        Name = "LG 65C14LB",
                        Description = "LG 65C14LB 65inç 165 cm 4K UHD OLED webOS Smart TV, Dahili Uydu Alıcılı",
                        Price = 28000,
                        StockAmount = 15,
                        SoldAmount = 0,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lg/thumb/127688-2-3_large.jpg",
                        CategoryId = 2
                    }, new Product()
                    {
                        Name = "LG 55NANO816",
                        Description = "LG 55NANO816 55inç 139 cm NANOCELL 4K UHD webOS Smart TV, Dahili Uydu Alıcılı",
                        Price = 12000,
                        StockAmount = 20,
                        SoldAmount = 5,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lg/thumb/128927-1_large.jpg",
                        CategoryId = 2
                    }, new Product()
                    {
                        Name = "PHILIPS 55PUS9206",
                        Description = "PHILIPS 55PUS9206 55inç 139 cm 4K UHD Android TV, 4 taraflı ambilight, Dahili Uydu Alıcılı",
                        Price = 14500,
                        StockAmount = 30,
                        SoldAmount = 20,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/129541_large.jpg",
                        CategoryId = 2
                    }, new Product()
                    {
                        Name = "MacBook Pro MK183TU/A",
                        Description = "MACBOOK PRO MK183TU/A M1 PRO 16GB-512GBSSD-LIQUID RETİNA-16inç - SPACE GREY",
                        Price = 50000,
                        StockAmount = 50,
                        SoldAmount = 10,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/130715-1_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "MacBook Pro MKGQ3TU/A",
                        Description = "MACBOOK PRO MKGQ3TU/A M1 PRO 16GB-1TB SSD-LIQUID RETİNA-14inç - SPACE GREY",
                        Price = 50000,
                        StockAmount = 50,
                        SoldAmount = 20,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/130716-1_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "MacBook Air Z12A116512-TQ6",
                        Description = "MACBOOK AIR Z12A116512-TQ6 M1 16GB-512GBSSD-RETİNA-13.3inç - INT - GOLD",
                        Price = 28000,
                        StockAmount = 50,
                        SoldAmount = 30,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129552_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "MacBook Air Z12A116256-TQ6",
                        Description = "MACBOOK AIR Z12A116256-TQ6 M1 16GB-256GBSSD-RETİNA-13.3inç - INT - GOLD",
                        Price = 24000,
                        StockAmount = 50,
                        SoldAmount = 25,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/121387_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "HUAWEI Matebook D15",
                        Description = "HUAWEI MATEBOOK D15 CORE İ3 10110U 2.1GHZ-8GB-256GBSSD-15.6inç - INT - W10 - GREY",
                        Price = 6500,
                        StockAmount = 50,
                        SoldAmount = 40,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/130999-1_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "HP 255 G8",
                        Description = "HP 255 G8 AMD ATHLON 3150U 2.4GHZ-8GB-256GB SSD-15.6inç - AMD - W10",
                        Price = 6530,
                        StockAmount = 50,
                        SoldAmount = 40,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/130723-1_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "LENOVO IDEAPAD 5",
                        Description = "LENOVO IDEAPAD 5 CORE İ5 1135G7 2.4GHZ-8GB-512GB SSD-14inç - MX450 2GB - W10",
                        Price = 10000,
                        StockAmount = 50,
                        SoldAmount = 20,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/130661-1_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "HUAWEI Matebook D 16",
                        Description = "HUAWEI MATEBOOK D 16 AMD RYZEN 5 4600H 3GHZ-16GB-512GB SSD-16.1inç - AMD - W10",
                        Price = 10500,
                        StockAmount = 50,
                        SoldAmount = 20,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/120475_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "MSI GF63 THIN",
                        Description = "MSI GF63 THIN CORE İ5 10500H 2.5GHZ-8GB-512GB SSD-15.6inç - RTX3050 4GB - FREEDOS",
                        Price = 13500,
                        StockAmount = 40,
                        SoldAmount = 10,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/130987-1_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "MSI KATANA GF76",
                        Description = "MSI KATANA GF76 CORE İ7 11800H 2.3GHZ-16GB-1TB SSD-17.3inç -RTX3050TI 4GB-W10",
                        Price = 35000,
                        StockAmount = 50,
                        SoldAmount = 10,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/123273_large.jpg",
                        CategoryId = 3
                    }, new Product()
                    {
                        Name = "SAMSUNG GALAXY TAB S6 Lite",
                        Description = "SAMSUNG GALAXY TAB S6 Lite SM-P610NZBATUR MAVİ 1.7GHZ-64GB DISK-4GB-10.4inç-AND.Q",
                        Price = 3800,
                        StockAmount = 150,
                        SoldAmount = 100,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/TeoriV2-107497_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "HUAWEI MATEPAD T8",
                        Description = "HUAWEI MATEPAD T8 MTK MT8768 -1.5GHZ-2GB-32GB-BT-8inç -CAM- EMUI 10.0.1 TABLET",
                        Price = 1200,
                        StockAmount = 200,
                        SoldAmount = 190,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-107901_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "LENOVO TAB M7",
                        Description = "LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7inç -CAM- ANDROID PIE",
                        Price = 800,
                        StockAmount = 150,
                        SoldAmount = 50,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-108106_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "LENOVO TAB M10",
                        Description = "LENOVO TAB M10 MTK HELIO P22T 2.3GHZ-4GB-64GB eMMC-BT-10.1inç-CAM- AND.10",
                        Price = 2100,
                        StockAmount = 150,
                        SoldAmount = 100,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/111521_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "2.Nesil iPad Pro",
                        Description = "2.Nesil iPad Pro 512GB WIFI+Cellular Space Grey 11inç Retina Ekran Tablet",
                        Price = 12100,
                        StockAmount = 150,
                        SoldAmount = 100,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/122021_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "5.Nesil iPad Pro",
                        Description = "5.Nesil iPad Pro 128GB WIFI+Cellular Silver-12.9inç Retina Ekran Tablet",
                        Price = 25500,
                        StockAmount = 150,
                        SoldAmount = 10,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/123222_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "Ipad Mini 6.Nesil",
                        Description = "Ipad Mini 6.Nesil-256GB WIFI Mor-8.3inç Liquid Retina Ekran Tablet",
                        Price = 13500,
                        StockAmount = 150,
                        SoldAmount = 140,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129968-5_large.jpg",
                        CategoryId = 4
                    }, new Product()
                    {
                        Name = "9.Nesil Yeni iPad",
                        Description = "9.Nesil Yeni iPad 256GB WIFI+4G Silver 10.2inç Retina Ekran Tablet",
                        Price = 12500,
                        StockAmount = 150,
                        SoldAmount = 100,
                        ImageURLs = "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/silver-9_large.jpg",
                        CategoryId = 4
                    });
                }

                if (!context.Categories.Any())
                {
                    context.Categories.AddRange(new Category() 
                    { 
                        Name = "Tablet"
                    }, new Category()
                    {
                        Name = "Bilgisayar"
                    }, new Category()
                    {
                        Name = "Televizyon"
                    }, new Category()
                    {
                        Name = "Telefon"
                    });
                }

                if (!context.Managers.Any())
                {
                    context.Managers.AddRange(new Manager()
                    {
                        Email = "admin@admin.com",
                        FirstName = "Admin",
                        LastName = "Admin",
                        Password = "Admin",
                        Authorization = AuthorizationType.FullAuthority
                    }, new Manager()
                    {
                        Email = "mehmet.mutlu@admin.com",
                        FirstName = "Mehmet",
                        LastName = "Mutlu",
                        Password = "mehmetmutlu",
                        Authorization = AuthorizationType.HalfAuthority
                    });
                }

                context.SaveChanges();
            }
        }
    }
}
