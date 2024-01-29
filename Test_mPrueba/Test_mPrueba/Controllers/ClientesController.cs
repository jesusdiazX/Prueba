using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Test_mPrueba.Bussiness.ClienteRepository;
using Test_mPrueba.Bussiness.tiendaAticuloRepository;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    [Authorize]
    public class ClientesController : Controller
    {

        private readonly IclienteRepository _relacionRepository;
        public ClientesController(IclienteRepository repp)
        {

            _relacionRepository = repp;
        }


        [HttpGet("/get-cliente")]
        public async Task<IActionResult> getclientes()
        {
            cliente re = new cliente();
            re.opcion = 1;

            var entity = await _relacionRepository.getcliente(re);


            return Ok(entity);
        }

        [HttpGet("/get-clienteId")]
         public async Task<IActionResult> getclientesId(int id)
            {
                cliente re = new cliente();
                re.opcion = 5;

                var entity = await _relacionRepository.getClienteId(id);


                return Ok(entity);
            }
        

        [HttpPost("/add-cliente")]
        public async Task<IActionResult> addclienteAsync(cliente articles)
        {
            articles.opcion = 2;
            var entity = await _relacionRepository.Add(articles);


            return Ok(entity);
        }

        [HttpPut("/upd-cliente")]
        public async Task<IActionResult> updclienteAsync(cliente articles)
        {
            articles.opcion = 4;
            var entity = await _relacionRepository.update(articles);


            return Ok(entity);
        }
        [HttpDelete("/del-cliente")]
        public async Task<IActionResult> delclienteAsync(int Id)
        {
            cliente cl = new cliente();
            cl.opcion = 3;
            cl.id_cliente = Id;
            var entity = await _relacionRepository.delete(cl);


            return Ok(entity);
        }

    }
}
