import axios from "axios";
import * as cheerio from "cheerio";


export async function fetchCovidData () {
  try {
    let html = await axios.get("https://www.worldometers.info/coronavirus/country/zimbabwe/");
    const $ = cheerio.load(html.data);
    let stats = $(".maincounter-number").text().split('\n\n');
    let cases = stats[0].replace('\n', '');
    let deaths = stats[1].replace('\n', '');
    let recovered = stats[2].replace('\n', '');
    return {cases, deaths, recovered};
  } catch (error) {
    console.log(error);
  }
}