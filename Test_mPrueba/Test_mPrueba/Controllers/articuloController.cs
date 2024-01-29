using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Test_mPrueba.Bussiness.ArticulosRepository;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    [Authorize]
    public class articuloController : ControllerBase
    {
       
        private readonly IArticulosRepository _articulosRepository;
        private readonly IWebHostEnvironment _env;

        public articuloController(IArticulosRepository art, IWebHostEnvironment ev)
        {
            _articulosRepository = art;
            _env = ev;  
        }

        [HttpGet("/get-articulo")]
        public async Task<IActionResult> GetArticuloAsync()
        {
            var entity = await _articulosRepository.GetArticles();

           
            return Ok(entity);
        }

        [HttpGet("/get-articuloId")]
        public async Task<IActionResult> GetArticuloIdAsync(int id)
        {
            var entity = await _articulosRepository.GetArticlesid(id);


            return Ok(entity);
        }

        [HttpPost("/add-articulo")]
        public async Task<IActionResult> ArticuloAsync(articles articles)
        {
            var entity = await _articulosRepository.Add(articles);


            return Ok(entity);
        }

        [HttpPut("/upd-articulo")]
        public async Task<IActionResult> updArticuloAsync(articles articles)
        {
            var entity = await _articulosRepository.Update(articles);


            return Ok(entity);
        }
        [HttpDelete("/del-articulo")]
        public async Task<IActionResult> delArticuloAsync(int Id)
        {
            var entity = await _articulosRepository.Delete(Id);


            return Ok(entity);
        }


        [Route("UploadFile")]
        [HttpPost]
        public Task<articles> UploadFile(IFormFile file)
        {
            // bool resultado = false;
            var resultado = new articles();

            var file0 = file.FileName;


            string NombreCarpeta = "/Archivos/";


            string RutaRaiz = _env.ContentRootPath;


            string RutaCompleta = RutaRaiz + NombreCarpeta;



            if (!Directory.Exists(RutaCompleta))
            {
                Directory.CreateDirectory(RutaCompleta);
            }


            if (file.Length > 0)
            {

                string NombreArchivo = file.FileName;


                string RutaFullCompleta = Path.Combine(RutaCompleta, NombreArchivo);





                //Se crea una variable FileStream para carlo en la ruta definida
                using (var stream = new FileStream(RutaFullCompleta, FileMode.Create))
                {
                    file.CopyTo(stream);

                    // resultado.imagen= RutaFullCompleta;
                }
                string Base64 = Conversor(RutaFullCompleta);
                var imgSrc = String.Format("data:image/gif;base64,{0}", Base64);
                resultado.imagen = imgSrc;



            }


            return Task.FromResult(resultado);

        }

        private static string Conversor(string Path)
        {
            byte[] imageArray = System.IO.File.ReadAllBytes(Path);
            string base64ImageRepresentation = Convert.ToBase64String(imageArray);
            return base64ImageRepresentation;
        }

    }
}
