using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using signApi.Data;
using signApi.Model;

namespace signApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class registerUsersController : ControllerBase
    {
        private readonly UserDbContext _Context;

        public registerUsersController(UserDbContext context)
        {
            _Context = context;
        }

        [HttpGet]

        public async Task<IActionResult> GetUser()
        {

            var user = await _Context.users.ToListAsync();
            return Ok(user);
        }

        [HttpPost]

        public async Task<IActionResult> addUser(User user)
        {
            _Context.users.Add(user);
            await _Context.SaveChangesAsync(); 

            return Ok(user);
        }
    }
}
