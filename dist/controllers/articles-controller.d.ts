import Article from "../interfaces/article";
export default abstract class ArticlesController {
    abstract getTopArticles(): Promise<Array<Article>>;
}
