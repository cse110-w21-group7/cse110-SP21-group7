const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('testing daily log page', () => {

 /*it('Test1: adding a reflection', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')
    
    await page.evaluate(() => {
      //let input = document.querySelector('input[type="radio"]')
      let input = document.querySelector('input[id="input1"]')
      input.click() 
   })

   await page.waitFor(2000)


   await page.type('#input-area', 'hello')
   await page.click('#cb1', { clickCount: 1 }) 

    

    await browser.close()


  })*/ 


  /*it('Test2: adding an event', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')


   await page.evaluate(() => {
    var test = document.querySelector('input[id="input2"]')
     test.click();
 })

   await page.waitFor(2000)


   //await page.type('#input-area', 'hello')
   //await page.click('#cb1', { clickCount: 1 }) 

    

    await browser.close()

  })*/

  /*it('Test3: adding a task', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')


   await page.evaluate(() => {
    var test = document.querySelector('input[id="input3"]')
     test.click();
 })

   await page.waitFor(2000)

    await browser.close()

  })*/ 

  /*it('Test4: adding a note', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')


   await page.evaluate(() => {
    var test = document.querySelector('input[id="input4"]')
     test.click();
 })

   await page.waitFor(2000)

   await page.type('#input-area', 'hello world')
   await page.click('#cb1', { clickCount: 1 }) 

    await browser.close()

  })*/

  /*it('Test5: collapsing daily log view', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await page.click('#collapse', { clickCount: 1 })

    await page.waitFor(5000)

    await browser.close()

  })*/ 

  /*it('Test6: cancel adding a reflection', async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')


    await page.evaluate(() => {
      let input = document.querySelector('input[id="input1"]')
      input.click() 
   })

    await page.waitFor(2000)

    await page.type('#input-area', 'hello')
    await page.click('#cb2', { clickCount: 1 })

    await browser.close()

  })*/

  it('Test7: adding a note', async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5502/source/html/daily.html')


   await page.evaluate(() => {
    var test = document.querySelector('input[id="input4"]')
     test.click();
  })

    await page.waitFor(2000)

    await page.type('#input-area', 'hello world')
    await page.click('#cb2', { clickCount: 1 }) 

    await browser.close()

  })

})
