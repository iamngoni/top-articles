import axios from "axios";
import * as cheerio from "cheerio";

export async function fetchData (): Promise<Array<Data>> {
  let dataArray: Array<Data> = [];
  try{
    let html = await axios.get("https://techzim.co.zw/latest-articles");
    const $ = cheerio.load(html.data);
    $(".tz-theme-category-latest-article").each(function(i, el) {
      const author = $(el).find(".author-name").text().replace(/\s\s+/g, '');
      const url = $(el).find("a").attr("href");
      const heading = $(el).find("a").find("h3").text().replace(/\s\s+/g, '');
      const description = $(el).find(".tz-theme-ls > p").text().replace(/\s\s+/g, '').replace('Valentine Muhamba', ' - ').replace('Staff Writer', ' - ').replace('Edwin Chabuka', ' - ').replace('Garikai Dzoma', ' - ');
      const img = $(el).find("img").attr("src");
      let data: Data = {
        id: i,
        author,
        url,
        heading,
        description,
        img
      };
      dataArray.push(data);
    });
  } catch (error) {
    console.log(error);
  }
  return dataArray;
}

interface Data {
  id: Number,
  author: string,
  url: any,
  heading: string,
  description: string,
  img: any
}
