using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Test_mPrueba.Bussiness.TiendaRepository;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    [Authorize]
    public class tiendaController : ControllerBase
    {

        private readonly ITiendaRepository _tiendaRepository;
        public tiendaController(ITiendaRepository rep) {

            _tiendaRepository = rep;
        }   

        [HttpGet("/get-tiendas")]
        public async Task<IActionResult> GetTiendasAsync()
        {
            var entity = await _tiendaRepository.GetTienda();


            return Ok(entity);
        }
        [HttpGet("/get-tiendaÍd")]
        public async Task<IActionResult> GetTiendasAsync(int id)
        {
            var entity = await _tiendaRepository.GetTiendaId(id);


            return Ok(entity);
        }
        [HttpPost("/add-tienda")]
        public async Task<IActionResult> tiendaAsync(TiendaEntity ti)
        {
            var entity = await _tiendaRepository.Add(ti);


            return Ok(entity);
        }

        [HttpPut("/upd-tienda")]
        public async Task<IActionResult> updtiendaAsync(TiendaEntity ti)
        {
            var entity = await _tiendaRepository.update(ti);


            return Ok(entity);
        }
        [HttpDelete("/del-tienda")]
        public async Task<IActionResult> deltiendaAsync(int Id)
        {
            var entity = await _tiendaRepository.Delete(Id);


            return Ok(entity);
        }




    }

}
    