const { spawnSync } = require('child_process')

const res = spawnSync('pwsh', ['get-date'])

console.log(res.stdout.toString())