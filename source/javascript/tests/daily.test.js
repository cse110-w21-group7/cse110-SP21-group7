const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing daily log page', () => {

  it('adding a reflection', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:500/source/html/daily.html')

    await page.evaluate(() => {
      let input = document.querySelector('input[id="input1"]')
      input.click()
    })

    await page.waitFor(2000)


    await page.type('#input-area', 'hello')
    await page.click('#cb2', { clickCount: 1 })



    await browser.close()


  })


  it('adding an event', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')


    await page.evaluate(() => {
      var test = document.querySelector('input[id="input2"]')
      test.click();
    })

    await page.waitFor(2000)

    await page.type('#time-input', '0120a')
    await page.type('#date-input', '04082021')



    await page.type('#input-area', 'hello')
    await page.click('#cb2', { clickCount: 1 })



    await browser.close()

  })

  it('adding a task', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')


    await page.evaluate(() => {
      var test = document.querySelector('input[id="input3"]')
      test.click();
    })

    await page.waitFor(2000)

    await page.type('#date-input', '04082021')

    await page.type('#input-area', 'hello')
    await page.click('#cb2', { clickCount: 1 })


    await browser.close()

  })

  it('adding a note', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')


    await page.evaluate(() => {
      var test = document.querySelector('input[id="input4"]')
      test.click();
    })

    await page.waitFor(2000)

    await page.type('#input-area', 'hello world')
    await page.click('#cb2', { clickCount: 1 })

    await browser.close()

  })

  it('collapsing daily log view', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await browser.close()

  })

  it('cancel adding a reflection', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')


    await page.evaluate(() => {
      let input = document.querySelector('input[id="input1"]')
      input.click()
    })

    await page.waitFor(2000)

    await page.type('#input-area', 'hello')
    await page.click('#cb1', { clickCount: 1 })

    await browser.close()

  })

  it('adding a note and canceling', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')


    await page.evaluate(() => {
      var test = document.querySelector('input[id="input4"]')
      test.click();
    })

    await page.waitFor(2000)

    await page.type('#input-area', 'hello world')
    await page.click('#cb1', { clickCount: 1 })

    await browser.close()

  })

  it('adding a blank reflection', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')

    await page.evaluate(() => {
      let input = document.querySelector('input[id="input1"]')
      input.click()
    })

    await page.waitFor(2000)

    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await page.waitFor(2000)

    await page.click('#cb2', { clickCount: 1 })

    await page.waitFor(2000)

    await browser.close()

  })

  it('adding a blank note', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')

    await page.evaluate(() => {
      let input = document.querySelector('input[id="input4"]')
      input.click()
    })

    await page.waitFor(2000)

    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await page.waitFor(2000)

    await page.click('#cb2', { clickCount: 1 })

    await page.waitFor(2000)

    await browser.close()

  })

  it('adding a blank event', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/source/html/daily.html')


    await page.evaluate(() => {
      var test = document.querySelector('input[id="input2"]')
      test.click();
    })

    await page.waitFor(2000)

    await page.type('#time-input', '0120a')
    await page.type('#date-input', '04082021')

    await page.waitFor(2000)

    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await page.click('#cb2', { clickCount: 1 })



    await browser.close()

  })

})
