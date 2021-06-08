const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing index page', () => {
  /*it('Test1: Clicking the add icon, new URL should contain daily.html', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/index.html')

    await page.click('#cb', {clickCount: 1 })

    const url = await page.url()
    console.log(url);
    expect(url).to.include('source/html/daily.html')
    await browser.close()
  })*/

  /*it('Test2: redirects to the correct weekly log from index', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/index.html')



  })*/

  /*it('Test3: go to daily log using nav bar', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/index.html')

    //await page.hover('#dailyNav')
    //await page.click('#dailyNav', {clickCount: 1})
    //console.log(document.querySelector('#dailyNav').innerHTML)
    page.$eval('#dailyNav', el => el.click())
    //console.log(el.innerHTML)
    //page.waitForNavigation()
    await page.waitFor(3000)


    const url = await page.evaluate(() => location.href)
    console.log(url)
    expect(url).to.be.include('127.0.0.1:5502/source/html/daily.html')

    await browser.close()
  })*/

  /*it('Test4: go to collection using nav bar', async () => {

    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/index.html')

    page.$eval('#collectionNav', el => el.click())
    //page.waitForNavigation()
    await page.waitFor(3000)

    //URL isnt changing but its redirecting to the right page 
    const url3 = await page.url()
    console.log(url3)
    expect(url3).to.be.include('127.0.0.1:5502/source/html/collection.html')

    await browser.close()
  })*/

  /*it('Test5: go to weekly using nav bar', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/index.html')

    page.$eval('#weeklyNav', el => el.click())
    //page.waitForNavigation()
    await page.waitFor(3000)

    //URL isnt changing but its redirecting to the right page 
    const url4 = await page.url()
    console.log(url4)
    expect(url4).to.be.include('127.0.0.1:5502/source/html/weekly.html')

    await browser.close()
  })*/

  /*it('Test6: go to weekly using nav bar and go back to index', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/index.html')

    page.$eval('#weeklyNav', el => el.click())
    page.waitForNavigation() 

    //URL isnt changing but its redirecting to the right page// 
    const url4 = await page.url()
    console.log(url4)
    expect(url4).to.be.include('127.0.0.1:5502/source/html/weekly.html')

    await page.goBack()

    const url5 = await page.url()
    console.log(url5)
    expect(url5).to.be.include('127.0.0.1:5502/source/html/index.html')

    await browser.close()
  })*/
})
