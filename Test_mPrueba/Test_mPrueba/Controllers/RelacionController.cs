using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Test_mPrueba.Bussiness.tiendaAticuloRepository;
using Test_mPrueba.Bussiness.TiendaRepository;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    [Authorize]
    public class RelacionController : ControllerBase
    {

        private readonly IrelacionRepository _relacionRepository;
        public RelacionController(IrelacionRepository repp) {

            _relacionRepository = repp;
        }   

        [HttpGet("/get-tienda-articulo")]
        public async Task<IActionResult> gettoendaarticulo()
        {
            relacion re = new relacion();
            re.opcion = 1;

            var entity = await _relacionRepository.getTiendaArticulolis(re);


            return Ok(entity);
        }
        [HttpPost("/add-tienda-articulo")]
        public async Task<IActionResult> addtiendaarticulo(relacion re)
        {
            var entity = await _relacionRepository.TiendaArticulo(re);

            return Ok(entity);
        }

        [HttpPut("/upd-tienda-articulo")]
        public async Task<IActionResult> updArticuloAsync(relacion re)
        {
            var entity = await _relacionRepository.TiendaArticulo(re);


            return Ok(entity);
        }
        [HttpDelete("/del-tienda-articulo")]
        public async Task<IActionResult> delArticuloAsync(int Id)
        {
            relacion re = new relacion();
            re.opcion = 3;
            re.id = Id;
            var entity = await _relacionRepository.TiendaArticulo(re);


            return Ok(entity);
        }

        [HttpGet("/get-cleinte-articulo")]
        public async Task<IActionResult> GetClienteArticulo()
        {

            relacion re = new relacion();
            re.opcion = 1;
            var entity = await _relacionRepository.getClienteArticulo(re);


            return Ok(entity);
        }
        [HttpPost("/add-cliente-articulo")]
        public async Task<IActionResult> addclientearticulo(relacion re)
        {
            var entity = await _relacionRepository.clienteArticulo(re);

            return Ok(entity);
        }

        [HttpPut("/upd-cliente-articulo")]
        public async Task<IActionResult> updclientearticulo(relacion re)
        {
            var entity = await _relacionRepository.clienteArticulo(re);


            return Ok(entity);
        }

        [HttpDelete("/del-cliente-articulo")]
        public async Task<IActionResult> deleteclienteArticulo(int Id)
        {
            relacion re = new relacion();
            re.opcion = 3;
            re.id = Id;
            var entity = await _relacionRepository.TiendaArticulo(re);


            return Ok(entity);
        }






    }

}
    