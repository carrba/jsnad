const { exec } = require('child_process')
const { argv } = require('process')
const  os = require('os')

function doubleSlash(input) {
    let output = input.replaceAll('\\','\\\\')
    return output
}

if (argv.length < 3){
    console.error('Must supply a directory as an argument')
}
else {
    // const myVal = doubleSlash(argv[2])
    const x = os.platform() === 'darwin' ? "ls " : "dir "
    const cmd = x + argv[2]
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
