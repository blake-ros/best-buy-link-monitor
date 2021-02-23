const puppeteer = require("puppeteer");

(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"]
  });
  const page = await browswer.newPage();
  await page.goto("https://pptr.dev");

  await page.waitFor(5000);
  await browswer.close();
})();
