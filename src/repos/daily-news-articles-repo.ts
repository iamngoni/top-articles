import ArticlePreview from "../interfaces/articlePreview";
import ArticlesRepository from "./articles-repo";
import axios from "axios";
import * as cheerio from "cheerio";

export class DailyNewsArticlesRepository extends ArticlesRepository {
    async getTopArticles(): Promise<ArticlePreview[]> {
        let articles: Array<ArticlePreview> = [];
        try {
            let html = await axios.get("https://dailynews.co.zw");

            const $ = cheerio.load(html.data);
            $(".inhype-post-details-inner").each((_, el) => {
                const heading = $(el).find("h3 > a").text();
                const url = $(el).find("h3 > a").attr("href");
                const date = $(el).find("div > time").text()

                const article: ArticlePreview = {
                    date,
                    heading,
                    url,
                    description: heading,
                    site: 'DailyNews'
                };
                articles.push(article);
            });
        } catch (error) {
            console.log(error);
        }

        articles = articles.filter((article) => article.date != "");

        return articles;
    }
}