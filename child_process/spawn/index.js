const { spawn } = require('child_process')

// const res = spawn('pwsh', ['-Command get-date'])

const res = spawn('node', ['./index.js'])

//const res = spawn('ls', {cwd: "/users/brian.carr"})

res.stdout.on('data', (stdout) => {
    console.log(stdout.toString())
})

res.stderr.on('data', (stderr) => {
    console.log(stderr.toString())
})