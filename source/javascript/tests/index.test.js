const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing index page', () => {
  it('Clicking the add icon, new URL should contain daily.html', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    await page.click('#cb', {clickCount: 1 })

    const url = await page.url()
    expect(url).to.include('source/html/daily.html')
    await browser.close()
  })

  it('redirects to the correct weekly log from index', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    const [response] = await Promise.all([
      page.$eval('#weeklyNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url = await page.url()
    expect(url).to.be.include('127.0.0.1:5500/source/html/weekly.html')

    await browser.close()
  })

  it('go to daily log using nav bar', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    const [response] = await Promise.all([
      page.$eval('#dailyNav', el => el.click()),
      page.waitForNavigation() 
    ]);


    const url4 = await page.url()
    expect(url4).to.be.include('127.0.0.1:5500/source/html/daily.html')

    await browser.close()
  })

  it('go to collection using nav bar', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')


    const [response] = await Promise.all([
      page.$eval('#collectionNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url3 = await page.url()
    expect(url3).to.be.include('127.0.0.1:5500/source/html/collection.html')

    await browser.close()
  })

  it('go to weekly using nav bar', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')


    const [response] = await Promise.all([
      page.$eval('#weeklyNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url4 = await page.url()
    expect(url4).to.be.include('127.0.0.1:5500/source/html/weekly.html')

    await browser.close()
  })

  it('go to weekly using nav bar and go back to index', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html') 

    const [response] = await Promise.all([
      page.$eval('#weeklyNav', el => el.click()),
      page.waitForNavigation() 
    ]);


    const url4 = await page.url()
    expect(url4).to.be.include('127.0.0.1:5500/source/html/weekly.html')

    await page.goBack()

    const url5 = await page.url()
    expect(url5).to.be.include('127.0.0.1:5500/source/html/index.html')

    await browser.close()
  })

  it('go to daily using nav bar and go back to index', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    const [response] = await Promise.all([
      page.$eval('#dailyNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url = await page.url()
    expect(url).to.be.include('127.0.0.1:5500/source/html/daily.html')

    await page.goBack()

    const url2 = await page.url()
    expect(url2).to.be.include('127.0.0.1:5500/source/html/index.html')

    await browser.close()
  }) 

  it('go to search using nav bar and go back to index', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    const [response] = await Promise.all([
      page.$eval('#searchNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url = await page.url()
    expect(url).to.be.include('127.0.0.1:5500/source/html/search.html')

    await page.goBack()

    const url2 = await page.url()
    expect(url2).to.be.include('127.0.0.1:5500/source/html/index.html')

    await browser.close()
  })

  it('go to collection using nav bar and go back to index', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    const [response] = await Promise.all([
      page.$eval('#collectionNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url = await page.url()
    expect(url).to.be.include('127.0.0.1:5500/source/html/collection.html')

    await page.goBack()

    const url2 = await page.url()
    expect(url2).to.be.include('127.0.0.1:5500/source/html/index.html')

    await browser.close()
  })

  it('go to search using nav bar', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/index.html')

    const [response] = await Promise.all([
      page.$eval('#searchNav', el => el.click()),
      page.waitForNavigation() 
    ]);

    const url = await page.url()
    expect(url).to.be.include('127.0.0.1:5500/source/html/search.html')

    await browser.close()
  })
})
