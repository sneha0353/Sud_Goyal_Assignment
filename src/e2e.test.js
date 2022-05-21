import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  },2000);


  describe("App.js", () => {

    it("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#form-test");
    const text = await page.$eval("#form-test", (e) => e.textContent);
    expect(text).toContain("FORM VALIDATION");

    await page.select('#validationCustom04', 'Leanne Graham');
    await page.waitForSelector('#inputAddress222');
    await page.$eval('#inputAddress222', el => el.value = 'abcd');
    await page.waitForSelector('#inputAddress333');
    await page.$eval('#inputAddress333', el => el.value = 'defg');
    await page.click('#submitButton');
    const text2 = await page.waitForSelector('#submitted', (e) => e.textContent);
    expect(text2).toContain("Success")
  });
  },30000);
  

  afterAll(() => browser.close(),2000);
});