"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechzimArticlesRepository = exports.ArticlesController = void 0;
var articles_repo_1 = require("./articles-repo");
Object.defineProperty(exports, "ArticlesController", { enumerable: true, get: function () { return articles_repo_1.default; } });
var techzim_articles_repo_1 = require("./techzim-articles-repo");
Object.defineProperty(exports, "TechzimArticlesRepository", { enumerable: true, get: function () { return techzim_articles_repo_1.TechzimArticlesRepository; } });
