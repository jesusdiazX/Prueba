using Dapper;
using System.Data;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.ClienteRepository
{
    public class ClienteRepository: IclienteRepository
    {
        private readonly DB _dapperRepository;

        public ClienteRepository(DB rep)
        {

            _dapperRepository = rep;
        }
        public async Task<cliente> Add(cliente art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("id", art.id_cliente);
                p.Add("nombre", art.nombre);
                p.Add("apellidos", art.apellidos);
                p.Add("direccion", art.direccion);
                p.Add("email", art.email);
                p.Add("opcion", art.opcion);
                

                var results = await con.QueryFirstAsync<cliente>("dbo.cdrudCliente", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<cliente> delete(cliente art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

               

                var p = new DynamicParameters();
                p.Add("id", art.id_cliente);
                p.Add("nombre", art.nombre);
                p.Add("apellidos", art.apellidos);
                p.Add("direccion", art.direccion);
                p.Add("email", art.email);
                p.Add("opcion", art.opcion);


                var results = await con.QueryFirstAsync<cliente>("dbo.cdrudCliente", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<cliente> getClienteId(int id)
        {
            using (var con = this._dapperRepository.GetConnection())
            {



                var p = new DynamicParameters();
                p.Add("id", id);          
                p.Add("opcion", 5);


                var results = await con.QueryFirstAsync<cliente>("dbo.cdrudCliente", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }
        public async Task<Responselogin> loginCliente(string user,string pssword)
        {
            using (var con = this._dapperRepository.GetConnection())
            {



                var p = new DynamicParameters();
                p.Add("id", 0);
                p.Add("email", user);
                p.Add("password", pssword);
                p.Add("opcion", 6);


                var results = await con.QueryFirstAsync<Responselogin>("dbo.cdrudCliente", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }


        
        public async Task<List<cliente>>  getcliente(cliente art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {


             
                var p = new DynamicParameters();
                p.Add("id", art.id_cliente);
                p.Add("nombre", art.nombre);
                p.Add("apellidos", art.apellidos);
                p.Add("direccion", art.direccion);
                p.Add("email", art.email);
                p.Add("opcion", art.opcion);


                var results = await con.QueryAsync<cliente>("dbo.cdrudCliente", param: p, commandType: CommandType.StoredProcedure);


                return results.ToList();
            }
        }

        public async Task<cliente> update(cliente art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();

                p.Add("id", art.id_cliente);
                p.Add("nombre", art.nombre);
                p.Add("apellidos", art.apellidos);
                p.Add("direccion", art.direccion);
                p.Add("email", art.email);
                p.Add("opcion", art.opcion);


                var results = await con.QueryFirstAsync<cliente>("dbo.cdrudCliente", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }


    }
}
