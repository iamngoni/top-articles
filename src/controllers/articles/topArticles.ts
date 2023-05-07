import { DailyNewsArticlesRepository, NewsdayArticlesRepository, TechzimArticlesRepository } from "../../repos"
import * as express from "express"
import { apiResponse } from "../../utils";
import { shuffle } from "../../utils/shuffle";

const techzimRepository = new TechzimArticlesRepository()
const dailyNewsRepository = new DailyNewsArticlesRepository();
const newsdayRepository = new NewsdayArticlesRepository()

export default async (req: express.Request, res: express.Response) => {
    const techzimArticles = await techzimRepository.getTopArticles();
    const dailyNewsArticles = await dailyNewsRepository.getTopArticles();
    const newsdayArticles = await newsdayRepository.getTopArticles();

    let articles = [...techzimArticles, ...dailyNewsArticles, ...newsdayArticles];
    articles = shuffle(articles);
    return res.status(200).json(apiResponse(true, articles, "Success",));
}