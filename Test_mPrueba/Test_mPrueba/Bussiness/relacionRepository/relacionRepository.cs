using Dapper;
using System.Data;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.tiendaAticuloRepository
{
    public class relacionRepository: IrelacionRepository
    {
        private readonly DB _dapperRepository;

        public relacionRepository(DB dB)
        {
            _dapperRepository = dB;
        }
        public async Task<relacion> clienteArticulo(relacion ti)
        {
            using (var con = this._dapperRepository.GetConnection())
            {


                var p = new DynamicParameters();
                p.Add("Id", ti.id);
                p.Add("IDCleinte", ti.idtienda);
                p.Add("IdArticulo", ti.idarticulo);
                p.Add("opcion", ti.opcion);


                var results = await con.QueryFirstAsync<relacion>("dbo.CrudCleinteArticulo", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }
        public async Task<relacion> TiendaArticulo(relacion ti)
        {
            using (var con = this._dapperRepository.GetConnection())
            {


                var p = new DynamicParameters();
                p.Add("Id", ti.id);
                p.Add("Idtienda", ti.idtienda);
                p.Add("IdArticulo", ti.idarticulo);
                p.Add("opcion", ti.opcion);


                var results = await con.QueryFirstAsync<relacion>("dbo.CrudTiendaArt", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<List<relacion>> getTiendaArticulolis(relacion ti)
        {
            using (var con = this._dapperRepository.GetConnection())
            {


                var p = new DynamicParameters();
                p.Add("Id", ti.id);
                p.Add("Idtienda", ti.idtienda);
                p.Add("IdArticulo", ti.idarticulo);
                p.Add("opcion", ti.opcion);


                var results0 = await con.QueryAsync<relacion>("dbo.CrudTiendaArt", param: p, commandType: CommandType.StoredProcedure);


                return results0.ToList();
            }
        }

        public async Task<List<relacion>> getClienteArticulo(relacion ti)
        {
            using (var con = this._dapperRepository.GetConnection())
            {


                var p = new DynamicParameters();
                p.Add("Id", ti.id);
                p.Add("IdCliente", ti.idtienda);
                p.Add("IdArticulo", ti.idarticulo);
                p.Add("opcion", ti.opcion);


                var results0 = await con.QueryAsync<relacion>("dbo.CrudClienteArticulo", param: p, commandType: CommandType.StoredProcedure);


                return results0.ToList();
            }
        }

    }
}

