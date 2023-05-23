class first {
    constructor () {}
    whisper() {console.log("whisper")}
}

class second extends first {
    constructor (){ super()}
    talk(){console.log("talking")}
}

class third extends second {
    constructor (){ super()}
    shout(){console.log("shouting")}
}

module.exports = { first, second, third }