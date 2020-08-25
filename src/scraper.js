const cheerio = require("cheerio");
const { JSDOM } = require("jsdom");
const axios = require("axios");

const ARTICLE_URL =
  "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html";
// "https://www.cnn.com/2020/08/25/health/us-coronavirus-tuesday/index.html";

async function scrapeAll(ARTICLE_URL) {
  async function scrapeContent(ARTICLE_URL) {
    try {
      const { data } = await axios.get(ARTICLE_URL);
      const $ = cheerio.load(data);
      let article = $("body").html(); //use article tag for those that have it
      return article;
    } catch (err) {
      console.error(err);
    }
  }

  async function scrapeStyle(ARTICLE_URL) {
    let externalStyles = [];
    let internalStyles = [];
    try {
      const dom = await JSDOM.fromURL(ARTICLE_URL);
      const { document } = dom.window;

      //query and save external styles (look for links that have rel='stylesheet' attribute)
      let external = document.querySelectorAll('link[rel="stylesheet"]');
      for (let i = 0; i < external.length; i++) {
        externalStyles.push(external[i].href);
      }

      //query and save internal styles
      let internal = document.querySelectorAll("style");
      for (let i = 0; i < internal.length; i++) {
        internalStyles.push(internal[i].innerHTML);
      }

      return [{ externalStyles }, { internalStyles }];

      // if (externalStyles.length > 0) {
      //   externalStyles.map(async (cssLink) => {
      //     let { data: styling } = await axios.get(cssLink);
      //     internalStyles.push(styling); //RUNS HERE
      //     // console.log("INTERNAL STYLES", internalStyles);
      //   });

      // let newStyles = [];
      // if (externalStyles.length > 0) {
      //   newStyles = externalStyles.map(async (cssLink) => {
      //     let { data: styling } = await axios.get(cssLink);
      //     newStyles.push(styling);
      //     // console.log(styling);
      //     return styling;
      //   });
      //   console.log("STYLES", newStyles);
      // }

      //   let newStyles2 = newStyles.map(async (x) => {
      //     return await x.then((y) => {
      //       return y;
      //     });
      //   });
      //   console.log("NEW STYLES 2", newStyles2);

      //   return internalStyles.concat(newStyles);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    content: await scrapeContent(ARTICLE_URL),
    style: await scrapeStyle(ARTICLE_URL).then(),
  };
}
// replace console.log with function to write it to database
scrapeAll(ARTICLE_URL).then((result) => console.log(result));

// scrapeContent(ARTICLE_URL).then((result) => console.log(result));
// scrapeStyle(ARTICLE_URL).then((result) => console.log(result));
