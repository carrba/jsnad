const { exec } = require('child_process')
const { argv } = require('process')

function doubleSlash(input) {
    let output = input.replaceAll('\\','\\\\')
    return output
}

if (argv.length < 3){
    console.error('Must supply a directory as an argument')
}
else {
    const myVal = doubleSlash(argv[2])
    const cmd = "dir " + argv[2]
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(error)
        }
        if (stderr){
            console.error(`Output Error: stderr`)
        }
        else {
            console.log(stdout)
        }
    })
}
