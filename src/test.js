const puppeteer = require('puppeteer');

async function getPic(){
  const browser = await puppeteer.launch({headless: false}); // launch instance of chrome
  const page = await browser.newPage(); // open new page
  await page.setViewport({width: 1000, height: 500}); // change page size
  await page.goto('https://google.com'); // navigate to a url
  await page.screenshot({path: 'google.png'}); // screenshot page

  await browser.close(); // close browser
}

getPic();