function RussianRoulette() {
    let math = Math.floor(Math.random() * 7)
    if (math < 1) {
        return ('You died!')
    } else {
        return ('You lived!')
    }
}

/*Example
alert(RussianRoulette())
or 
console.log(RussianRoulette())
*/
