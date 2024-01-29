using Dapper;
using System.Data;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.TiendaRepository
{
    public class TiendaRepository: ITiendaRepository
    {

  
             private readonly DB _dapperRepository;

        public TiendaRepository(DB dB)
        {
            _dapperRepository = dB;
        }
        public async Task<TiendaEntity> Add(TiendaEntity ti)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                
                var p = new DynamicParameters();
                p.Add("Id", ti.id_tienda);
                p.Add("sucursal",ti.Sucursal);
                p.Add("direccion", ti.Direccion);
                p.Add("opcion", 2);
                   

                var results = await con.QueryFirstAsync<TiendaEntity>("dbo.CrudTienda", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<int> Delete(int art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("Id", art);
                p.Add("opcion", 3);


                var results = await con.QuerySingleAsync<int>("dbo.CrudTienda", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }


        public async Task<List<TiendaEntity>> GetTienda()
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("ID",0);
                p.Add("sucursal","");
                p.Add("direccion","");
                p.Add("opcion", 1);

                var results = await con.QueryAsync<TiendaEntity>("dbo.CrudTienda", param: null, commandType: CommandType.StoredProcedure);


                return results.ToList();
            }
        }

        public async Task<TiendaEntity> GetTiendaId(int id)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("Id", id);
                p.Add("sucursal", "");
                p.Add("direccion", "");
                p.Add("opcion", 5);

                var results = await con.QueryFirstAsync<TiendaEntity>("dbo.CrudTienda", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<TiendaEntity> update(TiendaEntity ti)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("ID", ti.id_tienda);
                p.Add("sucursal", ti.Sucursal);
                p.Add("direccion",ti.Direccion);
                p.Add("opcion",4 );
               

                var results = await con.QueryFirstAsync<TiendaEntity>("dbo.CrudTienda", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

    }
}
