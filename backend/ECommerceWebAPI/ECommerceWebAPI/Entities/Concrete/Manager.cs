using ECommerceWebAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Entities.Concrete
{
    public enum AuthorizationType
    {
        FullAuthority = 1,
        HalfAuthority = 2
    }
    public class Manager : IEntity
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public AuthorizationType Authorization { get; set; }
    }
}
