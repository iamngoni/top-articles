import Article from "../interfaces/article";
export default abstract class ArticlesRepository {
    abstract getTopArticles(): Promise<Array<Article>>;
}
