import Article from "../interfaces/article";
import ArticlesRepository from "./articles-repo";
export declare class TechzimArticlesRepository extends ArticlesRepository {
    getTopArticles(): Promise<Article[]>;
}
