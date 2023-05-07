import apiResponse from "../utils/response";
import * as express from "express";


export const notFoundHandler = (req: express.Request, res: express.Response) => {
    res.status(404).json(apiResponse(false, null, "ROUTE NOT FOUND."));
}

export const healthCheckHandler = (req: express.Request, res: express.Response) => {
    console.log('here but not responding')
    res.status(200).json(apiResponse(true, null, "SERVICE RUNNING."))
}

export { default as topArticles } from "./top-articles"