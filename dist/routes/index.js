"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topArticles = exports.healthCheckHandler = exports.notFoundHandler = void 0;
const response_1 = require("../utils/response");
const notFoundHandler = (req, res) => {
    res.status(404).json((0, response_1.default)(false, null, "ROUTE NOT FOUND."));
};
exports.notFoundHandler = notFoundHandler;
const healthCheckHandler = (req, res) => {
    console.log('here but not responding');
    res.status(200).json((0, response_1.default)(true, null, "SERVICE RUNNING."));
};
exports.healthCheckHandler = healthCheckHandler;
var top_articles_1 = require("./top-articles");
Object.defineProperty(exports, "topArticles", { enumerable: true, get: function () { return top_articles_1.default; } });
