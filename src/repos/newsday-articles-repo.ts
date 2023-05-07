import ArticlePreview from "../interfaces/articlePreview";
import ArticlesRepository from "./articles-repo";
import axios from "axios";
import * as cheerio from "cheerio";

export class NewsdayArticlesRepository extends ArticlesRepository {
    async getTopArticles(): Promise<ArticlePreview[]> {
        let articles: Array<ArticlePreview> = [];
        try {
            let html = await axios.get("https://www.newsday.co.zw");

            const $ = cheerio.load(html.data);
            $(".boda-bottom").each((_, el) => {
                const heading = $(el).find("a > div").text();
                const url = $(el).find("a").attr("href");
                let date = "May. 7, 2023";
                $(el).find("small").each((_, e) => {
                    if (_ == 1) {
                        date = $(e).text();
                    }
                });

                const article: ArticlePreview = {
                    date,
                    heading,
                    url,
                    description: heading,
                    site: 'Newsday'
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