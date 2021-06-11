const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing collection edit page', () => {

  it('adding a task', async () => {

    const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('https:\/\/cse110-w21-group7.github.io\/cse110-SP21-group7\/collection-edit.html')

    await page.type('#myInput', 'hello')
    await page.click('.addBtn', { clickCount: 1 })

    await browser.close()

  })

  it('adding multiple tasks', async () => {
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
    const page = await browser.newPage()
    
    await page.goto('https:\/\/cse110-w21-group7.github.io\/cse110-SP21-group7\/collection-edit.html')

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

    await browser.close()
  })

  it('expanding and collapsing collection edit view', async () => {
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('https:\/\/cse110-w21-group7.github.io\/cse110-SP21-group7\/collection-edit.html')

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.waitFor(5000)

    await browser.close()
  })

  it('adding image to collection', async () => {
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('https:\/\/cse110-w21-group7.github.io\/cse110-SP21-group7\/collection-edit.html')

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await page.waitForSelector('input[type=file]')
    await page.waitFor(1000)

    await browser.close()
  })

  it('adding video to collection', async () => {
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('https:\/\/cse110-w21-group7.github.io\/cse110-SP21-group7\/collection-edit.html')

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.evaluate(() => document.querySelector('#add-video-btn').click())

    await browser.close()
  })

  it('attempt to add task with no input text', async () => {

    const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
    const page = await browser.newPage()
    await page.goto('https:\/\/cse110-w21-group7.github.io\/cse110-SP21-group7\/collection-edit.html')

    await page.type('#myInput', '')
    await page.click('.addBtn', { clickCount: 1 })

    await browser.close()

  })

})
