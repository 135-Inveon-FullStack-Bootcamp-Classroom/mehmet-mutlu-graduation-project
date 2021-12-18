using ECommerceWebAPI.Data.Services.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        public LoginService _loginService;

        public LoginsController(LoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet("login")]
        public IActionResult CheckManagerLogin(string email, string password)
        {
            var loginStatus = _loginService.CheckManagerLogin(email, password);
            return Ok(loginStatus);
        }
    }
}
