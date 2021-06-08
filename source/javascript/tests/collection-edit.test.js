const puppeteer = require('puppeteer')
const expect = require('chai').expect


describe('testing collection edit page', () => {

   /*beforeEach(function() {

    this.setTimeout(10000);
  
  });*/ 
  /*it('Test1: adding a task', async () => {
    
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] })

    await page.type('#myInput', 'hello')
    await page.click('.addBtn', { clickCount: 1 })

    await browser.close()
     
  })*/

  /*it('Test2: adding multiple tasks', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.type('#myInput', 'hello')
    await page.click('.addBtn', { clickCount: 1 })

    await page.type('#myInput', 'world')
    await page.click('.addBtn', { clickCount: 1 })

    await page.type('#myInput', 'hi')
    await page.click('.addBtn', { clickCount: 1 })

    await browser.close()
  })*/

  /*it('Test3: expanding and collapsing collection edit view', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await browser.close()
  }) */

  /*it('Test4: adding image to collection', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.click('#collapse', { clickCount: 1 })
    await page.waitForNavigation();

    await page.waitFor(5000)

    //await page.click('#add-image-btn', { clickCount: 1 })
    //await page.evaluate(()=>document.querySelector('#add-image-btn').click())

    await page.waitForSelector('input[type=file]')
    await page.waitFor(1000)
    const inputUploadHandle = await page.$('input[type=file]') 
 

    await page.waitForNavigation();

    await browser.close()
  })*/

  /*it('Test5: adding video to collection', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    //await page.click('#add-video-btn', { clickCount: 1 })
    await page.evaluate(()=>document.querySelector('#add-video-btn').click())

    await browser.close()
  })*/ 

  /*it('Test6: attempt to add task with no input text', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/collection-edit.html')

    await page.type('#myInput', '')
    await page.click('.addBtn', { clickCount: 1 })

    await browser.close()

  })*/

  /*it('Test 7: adding image and then deleteing it', async () => {

  })*/

  /*it('Test8: adding video and then deleting it', async () => {

  })*/
})
