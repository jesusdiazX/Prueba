using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.tiendaAticuloRepository
{
    public interface IrelacionRepository
    {
        Task<relacion> TiendaArticulo(relacion ti);
        Task<relacion> clienteArticulo(relacion ti);
        Task<List<relacion>> getClienteArticulo(relacion ti);
        Task<List<relacion>> getTiendaArticulolis(relacion ti);
    }
}
