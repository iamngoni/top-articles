import Article from "../interfaces/article";
import ArticlesController from "./articles-controller";
export declare class TechzimController extends ArticlesController {
    getTopArticles(): Promise<Article[]>;
}
