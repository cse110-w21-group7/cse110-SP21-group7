const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing collection edit page', () => {
  let browser, page

  before(async () => {
    browser = await puppeteer.launch(
      { headless: true,
        args: [`--no-sandbox`,
        `--disable-setuid-sandbox`]
      })
    page = await browser.newPage()
  });
  
  it('Test1: adding a task', async () => {
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.type('#myInput', 'hello')
    await page.$eval('.addBtn', (element) => {
      element.click()
    })
  })

  it('Test2: adding multiple tasks', async () => {
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

  })

  it('Test3: expanding and collapsing collection edit view', async () => {
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.$eval('#collapse', (element) => {
      element.click()
    })

  })

  it('Test4: adding image to collection', async () => {
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.$eval('#add-image-btn', (element) => {
      element.click()
    })

  })

  it('Test5: adding video to collection', async () => {
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.$eval('#collapse', (element) => {
      element.click()
    })

    await page.$eval('#add-video-btn', (element) => {
      element.click()
    })

  })

  it('Test6: attempt to add task with no input text', async () => {

  })

  it('Test 7: adding image and then deleteing it', async () => {

  })

  it('Test8: adding video and then deleting it', async () => {

  })
})
