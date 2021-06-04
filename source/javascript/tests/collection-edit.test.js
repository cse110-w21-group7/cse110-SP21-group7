const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing collection edit page', () => {
  /* beforeEach(function() {

    this.setTimeout(10000);

  }); */
  it('Test1: adding a task', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.type('#myInput', 'hello')
    await page.$eval('.addBtn', (element) => {
      element.click()
    })

    await browser.close()
    // done()
  })

  it('Test2: adding multiple tasks', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.type('#myInput', 'hello')
    await page.$eval('.addBtn', (element) => {
      element.click()
    })

    await page.type('#myInput', 'world')
    await page.$eval('.addBtn', (element) => {
      element.click()
    })

    await page.type('#myInput', 'hi')
    await page.$eval('.addBtn', (element) => {
      element.click()
    })

    const tasks =

    await browser.close()
  })

  it('Test3: expanding and collapsing collection edit view', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await browser.close()
  })

  it('Test4: adding image to collection', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.$eval('#add-image-btn', (element) => {
      element.click()
    })

    await browser.close()
  })

  it('Test5: adding video to collection', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.$eval('#add-video-btn', (element) => {
      element.click()
    })

    await browser.close()
  })

  it('Test6: attempt to add task with no input text', async () => {

  })

  it('Test 7: adding image and then deleteing it', async () => {

  })

  it('Test8: adding video and then deleting it', async () => {

  })
})
