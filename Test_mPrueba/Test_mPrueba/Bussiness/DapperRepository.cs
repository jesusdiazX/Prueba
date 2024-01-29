using Dapper;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Data.Common;

namespace Test_mPrueba.Bussiness
{
    public class DámperRepository
    {

        private readonly IConfiguration _configuration;
        private readonly string _conectionString;

        public DámperRepository(IConfiguration dbConnection)
        {
            _configuration = dbConnection;
            _conectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public IDbConnection GetConnection() => new SqlConnection(_conectionString);



    }
}
