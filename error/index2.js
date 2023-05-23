const { spawn } = require('child_process')
const { argv } = require('process')
const  os = require('os')

if (argv.length < 3){
    console.error('Must supply a directory as an argument')
}
else {
    let ps
    if (os.platform() === 'darwin') {
        ps = spawn('ls', ['-lh', argv[2]])
    }
    else {
        ps = spawn('powershell.exe', ["get-childitem", "-Directory", argv[2]], {stdio: "pipe" } )
    }
   
    ps.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
      
    ps.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
}
