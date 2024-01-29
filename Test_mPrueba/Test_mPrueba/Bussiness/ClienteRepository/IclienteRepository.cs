using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.ClienteRepository
{
    public interface IclienteRepository
    {
        Task<cliente> update(cliente art);
        Task<cliente> Add(cliente art);
        Task<List<cliente>> getcliente(cliente art);
        Task<cliente> getClienteId(int id);
        Task<Responselogin> loginCliente(string user,string password);
        Task<cliente> delete(cliente art);
    }
}
