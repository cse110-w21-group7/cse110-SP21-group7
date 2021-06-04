const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing creating a new collection', () => {
  let browser, page

  before(async () => {
    browser = await puppeteer.launch(
      { headless: true,
        args: [`--no-sandbox`,
        `--disable-setuid-sandbox`]
      })
    page = await browser.newPage()
  })

  it('Test1: creating a new collection', async () => {
    await page.goto('http://127.0.0.1:5502/source/html/collection.html')
    page.on('dialog', async (notif) => {
      console.log(notif.defaultValue('Collection name'))
    })

    const collections = page.$$('.collection-area')
    expect(collections.length).to.not.equal(0)
  })

  it('Test2: creating multiple new collections', async () => {

  })

  it('Test3: creating new collection and deleting the collection', async () => {

  })

  it('Test4: creating new collection and editing collection name', async () => {

  })

  it('Test5: creating new collection and going to the collection edit page', async () => {

  })
})
