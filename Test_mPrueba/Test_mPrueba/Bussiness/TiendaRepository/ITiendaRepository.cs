using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.TiendaRepository
{
    public interface ITiendaRepository
    {
        Task<List<TiendaEntity>> GetTienda();
        Task<TiendaEntity> GetTiendaId(int id);

        Task<TiendaEntity> Add(TiendaEntity art);
        Task<TiendaEntity> update(TiendaEntity art);
        Task<int> Delete(int art);

    }
}
