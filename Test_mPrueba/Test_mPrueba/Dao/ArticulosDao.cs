using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Transactions;
using Test_mPrueba.Bussiness;
using Test_mPrueba.Bussiness.DapperRepository;
using Test_mPrueba.Entity;

namespace Test_mPrueba.Dao
{
    public class ArticulosDao
    {
        private readonly DámperRepository _DbConnection;
     
        public ArticulosDao(DámperRepository con)
        {
            _DbConnection= con;

        }



       
        public async Task<articles> Add(articles art)
        {

            return null;
        }
        public async Task<articles> Update(articles art)
        {

            return null;
        }
        public async Task<int> Delete(int Id)
        {

            return 1;
        }
    }
}
