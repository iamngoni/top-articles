import axios from "axios";
import ArticlePreview from "../interfaces/articlePreview";
import ArticlesRepository from "./articles-repo";
import * as cheerio from "cheerio";

export class TechzimArticlesRepository extends ArticlesRepository {
    async getTopArticles(): Promise<ArticlePreview[]> {
        let articles: Array<ArticlePreview> = [];
        try {
            let html = await axios.get("https://techzim.co.zw/latest-articles");
            const $ = cheerio.load(html.data);
            $(".tz-wp-tw-w-full").each((_, el) => {
                const date = $(el).find(".tz-theme-post-meta > span").text()
                const url = $(el).find("a").attr("href");
                const heading = $(el).find("h2 > a").text().replace(/\s\s+/g, "");
                let description = "";
                $(el).find("p").each((_, e) => {
                    if ($(e).text() != "") {
                        description = $(e).text()
                    }
                })
                const article: ArticlePreview = {
                    date,
                    heading,
                    url,
                    description,
                    site: 'Techzim'
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