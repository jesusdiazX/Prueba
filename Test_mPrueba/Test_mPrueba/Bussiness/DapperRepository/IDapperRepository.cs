using System.Data;

namespace Test_mPrueba.Bussiness.DapperRepository
{
    public interface IDapperRepository
    {
        Task<T> QuerySingleAsync<T>(string sql, object? param = null, IDbTransaction? transaction = null, CancellationToken cancellationToken = default);
    }
}
