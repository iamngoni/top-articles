import axios from "axios";
import * as cheerio from "cheerio";


export async function fetchCovidData () {
  try {
    let html = await axios.get("https://www.worldometers.info/coronavirus/country/zimbabwe/");
    const $ = cheerio.load(html.data);
    let stats = $(".maincounter-number").text().split('\n\n');
    let cases = Number(stats[0].replace('\n', '').replace(' ', '').replace(',', ''));
    let deaths = Number(stats[1].replace('\n', '').replace(' ', '').replace(',', ''));
    let recovered = Number(stats[2].replace('\n', '').replace(' ', '').replace(',', ''));
    return {country: "Zimbabwe", cases, deaths, recovered, date: new Date().toLocaleDateString()};
  } catch (error) {
    console.log(error);
  }
}