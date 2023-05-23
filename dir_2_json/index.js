const fs = require('fs')
const { join } = require('path')

let myObj = {}
let myArray = []

function printer(val){
    newval = join(__dirname, val) 
    if (newval != __filename){
        // console.log(val)
        myArray.push(val)
    }
}

const allfiles = fs.readdirSync('.')
allfiles.forEach((val) => printer(val))

const myJson = {files: myArray}

const mj = JSON.stringify(myJson)

console.log("#####")
console.log(mj)

fs.writeFileSync('list.txt', mj, 'utf8')
