import { TechzimArticlesRepository } from "../../repos"
import * as express from "express"
import apiResponse from "../../utils/response";
import { DailyNewsArticlesRepository } from "../../repos/daily-news-articles-repo";
import { shuffle } from "../../utils/shuffle";

const techzimRepository = new TechzimArticlesRepository()
const dailyNewsRepository = new DailyNewsArticlesRepository();

export default async (req: express.Request, res: express.Response) => {
    const techzimArticles = await techzimRepository.getTopArticles();
    const dailyNewsArticles = await dailyNewsRepository.getTopArticles();

    let articles = [...techzimArticles, ...dailyNewsArticles];
    articles = shuffle(articles);
    return res.status(200).json(apiResponse(true, articles, "Success",));
}