import * as express from "express";
export declare const notFoundHandler: (req: express.Request, res: express.Response) => void;
export declare const healthCheckHandler: (req: express.Request, res: express.Response) => void;
export { default as topArticles } from "./top-articles";
