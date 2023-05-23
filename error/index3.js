const { readFile} =require('fs')
const { join } = require('path')
const { argv } = require('process')

if (argv.length < 3) {
    console.error("Need to supple a file param")
}
else {
    const filepath = join(__dirname, argv[2])
    readFile(filepath, (err, data) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log("data: " + data)
        }
    })
} 