"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = require("axios");
const cheerio = require("cheerio");
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        let dataArray = [];
        try {
            let html = yield axios_1.default.get("https://techzim.co.zw/latest-articles");
            const $ = cheerio.load(html.data);
            $(".tz-theme-category-latest-article").each(function (i, el) {
                const author = $(el).find(".author-name").text().replace(/\s\s+/g, '');
                const url = $(el).find("a").attr("href");
                const heading = $(el).find("a").find("h3").text().replace(/\s\s+/g, '');
                const description = $(el).find(".tz-theme-ls > p").text().replace(/\s\s+/g, '').replace('Valentine Muhamba', ' - ').replace('Staff Writer', ' - ').replace('Edwin Chabuka', ' - ').replace('Garikai Dzoma', ' - ');
                const img = $(el).find("img").attr("src");
                let data = {
                    id: i,
                    author,
                    url,
                    heading,
                    description,
                    img
                };
                dataArray.push(data);
            });
        }
        catch (error) {
            console.log(error);
        }
        return dataArray;
    });
}
exports.fetchData = fetchData;
