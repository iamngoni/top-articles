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
exports.fetchCovidData = void 0;
const axios_1 = require("axios");
const cheerio = require("cheerio");
function fetchCovidData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let html = yield axios_1.default.get("https://www.worldometers.info/coronavirus/country/zimbabwe/");
            const $ = cheerio.load(html.data);
            let stats = $(".maincounter-number").text().split('\n\n');
            let cases = Number(stats[0].replace('\n', '').replace(' ', '').replace(',', ''));
            let deaths = Number(stats[1].replace('\n', '').replace(' ', '').replace(',', ''));
            let recovered = Number(stats[2].replace('\n', '').replace(' ', '').replace(',', ''));
            return { country: "Zimbabwe", cases, deaths, recovered, date: new Date().toLocaleDateString() };
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.fetchCovidData = fetchCovidData;
