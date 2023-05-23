function mod (a, b) {
    if ( (typeof(a) === 'number') && (typeof(b) === 'number')) {
        const res = a % b
        return res
    }
    else {
        throw Error('inputs must be numbers')
    }
}

module.exports = mod

//console.log(mod(7,'8'))