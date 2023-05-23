const { execSync } = require('child_process')

const res = execSync('ls -al', {cwd: '/Users/brian.carr/Documents'})

console.log(res.toString())