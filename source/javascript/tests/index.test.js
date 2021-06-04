const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing index page', () => {
  let browser, page
  before(async () => {
    browser = await puppeteer.launch(
      { headless: true,
        args: [`--no-sandbox`,
        `--disable-setuid-sandbox`]
      })
    page = await browser.newPage()
  });


  it('Test1: Clicking the add icon, new URL should contain daily.html', async () => {
    await page.goto('http://127.0.0.1:5502/source/html/index.html')

    await page.click('#cb', { clickCount: 1 })

    const url = await page.url()
    expect(url).to.be.include('/source/html/index.html')
  })

  it('Test2: redirects to the correct monthly log from index', async () => {

  })

  it('Test3: go to daily log using nav bar and then go back to index page', async () => {

  })

  it('Test4: go to collection using nav bar and then go back to index page', async () => {

  })

  it('Test5: go to monthly using nav bar and then go back to index page', async () => {

  })
})
