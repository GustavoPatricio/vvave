using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vvaveapi.Models;

namespace vvaveapi.Controllers
{
    [Route("/api/auth")]
    public class UserAuthController : ControllerBase
    {

        public readonly LoginContext _contextLogin;
        public readonly Web_userContext _contextUser;

        public UserAuthController(LoginContext context, Web_userContext webUserContext)
        {
            _contextLogin = context;
            _contextUser = webUserContext;
        }


        [HttpPost]
        public async Task<ActionResult> Auth([FromBody] Login userLogin)
        {
            if (userLogin == null)
                return BadRequest();

            if (String.IsNullOrWhiteSpace(userLogin.Email) || String.IsNullOrWhiteSpace(userLogin.Senha))
                return BadRequest();

            //Pega o usuário
            //var a = await _context.Logins.AnyAsync(s => s.Email.Equals(userLogin.Email) && s.Senha.Equals(userLogin.Senha));

            Login user = await _contextLogin.Logins.FirstOrDefaultAsync(s => s.Email.Equals(userLogin.Email) && s.Senha.Equals(userLogin.Senha));
            if (user == null)
                return NotFound();
            WEB_USER webUser = await _contextUser.WEB_USER.FirstOrDefaultAsync(b => b.UUID == user.UUID);

            webUser.UUID = Guid.NewGuid().ToString();

            _contextUser.Entry(webUser).State = EntityState.Modified;

            await _contextUser.SaveChangesAsync();

            return Ok(webUser);
        }
    }
}