using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vvaveapi.Models;

namespace vvaveapi.Controllers
{

    [Route("api/user")]
    [ApiController]
    public class Web_userController : ControllerBase
    {
        private readonly Web_userContext _context;

        public Web_userController(Web_userContext context)
        {
            // Injeção de dependência 
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WEB_USER>>> GetAll()
        {
            return await _context.WEB_USER.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WEB_USER>> GetUserById(int id)
        {

            //LINQ para achar o user no banco
            var user = await _context.WEB_USER.FindAsync(id);

            if (user == null)
                return NotFound();

            return user;
        }

        [HttpPost]
        public async Task<ActionResult<WEB_USER>> NewUser(WEB_USER user)
        {
            _context.WEB_USER.Add(user);
            await _context.SaveChangesAsync();

            return Ok("success");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {

            var user = await _context.WEB_USER.FindAsync(id);

            if (user == null)
                return NotFound();

            _context.WEB_USER.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, WEB_USER user)
        {

            if (id != user.IdWeb_user)
                return BadRequest();

            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}