using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Reflection;
using System.Security.Claims;
using System.Text;
using Test_mPrueba.Bussiness.ClienteRepository;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    [Authorize]
    public class SeguridadController : ControllerBase
    {
        private IConfiguration _config;
        private IclienteRepository _iclienteRepository;

        public SeguridadController(IConfiguration conf, IclienteRepository co)
        {
            _config = conf;
            _iclienteRepository = co;
        }

        [HttpPost]
        [Route("token")]
        public async Task<IActionResult> token(Responselogin log)
        {
           
           
            string token = string.Empty;
            
                token = GenerateToken(log);




            return Ok(token);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult>login(login l)
        {
           
            var log = _iclienteRepository.loginCliente(l.username,l.password).Result;
          
            string token = string.Empty;
            if (log != null)
            {
                token = GenerateToken(log);
            }

            log.token =token;

            return Ok(log);
        }

        private string GenerateToken(Responselogin users)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,users.user)

            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);


            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
