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

myObj = {files: myArray}

const myJson = JSON.stringify(myObj)

console.log("#####")
console.log(myJson)

fs.writeFileSync('list.txt', myJson, 'utf8')
