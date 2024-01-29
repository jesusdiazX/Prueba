using Dapper;
using Microsoft.AspNetCore.Authorization;
using System.Data;

using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.ArticulosRepository
{

    public class ArticulosRepository : IArticulosRepository
    {
       private readonly DB _dapperRepository;

        public ArticulosRepository(DB rep) {

            _dapperRepository= rep;
        }
        public async Task<articles> Add(articles art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("Id", art.id_art);
                p.Add("codigo", art.codigo);
                p.Add("Descripcion", art.descripcion);
                p.Add("precio", art.precio);
                p.Add("stock", art.stock);
                p.Add("unidad", art.unidad);

                var results = await con.QueryFirstAsync<articles>("add_Articulos", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<articles> Delete(int art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                 p.Add("Id", art);
             

                var results = await con.QuerySingleAsync<articles>("delArticulos", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }


        public async Task<List<articles>> GetArticles()
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                //var p = new DynamicParameters();
                //p.Add("CustomerID", customer.CustomerID);
                //p.Add("CompanyName", customer.CompanyName);
                //p.Add("ContactName", customer.ContactName);
                //p.Add("Country", customer.Country);

                var results = await con.QueryAsync<articles>("dbo.GetArticulos", param: null, commandType: CommandType.StoredProcedure);


                return results.ToList();
            }
        }
        public async Task<articles> GetArticlesid(int id)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();
                p.Add("Id", id);
              

                var results = await con.QueryFirstAsync<articles>("dbo.GetArticulosID", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }

        public async Task<articles> Update(articles art)
        {
            using (var con = this._dapperRepository.GetConnection())
            {

                var p = new DynamicParameters();

                p.Add("Id", art.id_art);
                p.Add("codigo", art.codigo);
                p.Add("Descripcion", art.descripcion);
                p.Add("precio", art.precio);
                p.Add("stock", art.stock);
                p.Add("unidad", art.unidad
                    );

                var results = await con.QueryFirstAsync<articles>("dbo.updArticulos", param: p, commandType: CommandType.StoredProcedure);


                return results;
            }
        }


    }
}
