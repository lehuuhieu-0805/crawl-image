const puppeteer = require('puppeteer')
const download = require('image-downloader')

const search = 'IU'
const url = 'https://www.pinterest.com';

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            '--start-maximized'
        ]
    })
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.click('#__PWS_ROOT__ > div:nth-child(1) > div > div > div > div:nth-child(2) > div.Jea._he.b8T.gjz.zI7.iyn.Hsu > div.Jea.l7T.zI7.iyn.Hsu > div:nth-child(2) > button')
    await page.type('#email', '02dapzenha@gmail.com', { delay: 100 })
    await page.type('#password', 'Hieu1234', { delay: 100 })
    await page.click('#__PWS_ROOT__ > div:nth-child(1) > div > div > div > div:nth-child(2) > div.Jea.MIw.TpD.mQ8.sLG.zI7.iyn.Hsu > div.Jea.MIw.QLY.Rym.jzS.mQ8.ojN.p6V.prG.sLG.zI7.iyn.Hsu > div > div > div > div > div > div > div > div:nth-child(4) > form > div:nth-child(5) > button',
        { delay: 5000 })
    await page.waitForTimeout(3000)
    await page.type('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]', search, { delay: 100 })
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
    await page.evaluate(() => {
        window.scrollBy(0, 50000)
    })
    await page.waitForTimeout(5000)
    const images = await page.evaluate(() => {
        const data = document.querySelectorAll('.XiG.zI7.iyn.Hsu > img')
        let urls = []
        data.forEach(img => {
            urls.push(img.getAttribute('src'))
        })
        return urls
    })
    console.log(images.length)


    // const links = images.map(image => {
    //     let arr = image.split('/')
    //     arr[3] = 'originals'
    //     arr = arr.join('/')
    //     return arr
    // })
    // console.log(links)

    // for (let i = 0; i < links.length; i++) {
    //     options = {
    //         url: links[i],
    //         dest: `${__dirname}/images/${i + 9}.jpg`
    //     }
    //     download.image(options)
    //         .then(({ filename }) => {
    //             console.log('saved to ', filename)
    //         })
    //         .catch(err => console.log(err))
    // }

    await browser.close()
})()
