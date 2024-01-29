using Microsoft.Data.SqlClient;
using System.Data;
using Dapper;

namespace Test_mPrueba.Bussiness
{
    public class DB
    {

        private readonly IConfiguration _configuration;
        private readonly string _conectionString;

        public DB(IConfiguration dbConnection)
        {
            _configuration = dbConnection;
            _conectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public IDbConnection GetConnection() => new SqlConnection(_conectionString);

    }
}
