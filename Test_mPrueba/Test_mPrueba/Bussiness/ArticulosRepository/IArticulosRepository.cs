using Test_mPrueba.Entity;

namespace Test_mPrueba.Bussiness.ArticulosRepository
{
    public interface IArticulosRepository
    {
        Task<List<articles>> GetArticles();
        Task<articles> GetArticlesid(int id);
        Task<articles> Add(articles art);
        Task<articles> Update(articles art);
        Task<articles> Delete(int art);
    }
}
