
function setDelay (i) {
    setTimeout(() => {
        console.log(i)
        if ( i > 0 ) {
            i = i - 1
            setDelay(i)
        }
    }, 1000) 
}

setDelay(20)