const { spawn, exec } = require('child_process')

const { argv } = require('process')

if (argv[2] === 'spawn') {
    const ifc = spawn('ifconfig')
    ifc.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
}
else if (argv[2] === 'exec') {
    exec('ifconfig | grep en0 -A 4', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.error(`stderr: ${stderr}`);
    })
}
else {
    console.log('Please supply "spawn" or "exec" as a parameter')
}