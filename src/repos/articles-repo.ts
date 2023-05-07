import ArticlePreview from "../interfaces/articlePreview";

export default abstract class ArticlesRepository {
    abstract getTopArticles(): Promise<Array<ArticlePreview>>;
}