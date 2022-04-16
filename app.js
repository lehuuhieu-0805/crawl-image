const fs = require('fs')

const imageDirPath = `${__dirname}/images`

const images = fs.readdirSync(imageDirPath)
images.map((image, index) => fs.rename(
    `${imageDirPath}/${image}`,
    `${imageDirPath}/${index + 9}.jpg`,
    (err) => {
        if (err) console.log(err)
    }
))