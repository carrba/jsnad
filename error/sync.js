const { spawnSync, execSync } = require('child_process')

const { argv } = require('process')

if (argv[2] === 'spawnSync') {
    const ifc = spawnSync('ifconfig')
    console.log(ifc.output.toString())

}
else if (argv[2] === 'execSync') {
    const ifc = execSync('ifconfig | grep en0 -A 4')
    console.log(ifc.toString())
}
else {
    console.log('Please supply "spawnSync" or "execSync" as a parameter')
}