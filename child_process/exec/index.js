const { exec } = require('child_process')

// exec('ls -al', {cwd: '/Users/brian.carr/Documents'}, (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//       }
//       console.log(`stdout: ${stdout}`);
//       console.error(`stderr: ${stderr}`);   
// })

// exec('pwsh -Command Get-Date', (error, stdout, stderr) => {
//   if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);   
// })

exec('node ./index.js', (error, stdout, stderr) => {
  if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);   
})