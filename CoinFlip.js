function CoinFlip() {//Claiming the function
    let math = Math.random() //getting a random value between 0 and 1
    if (math < 0.5) { //reading the value for < 0.5
        return('Heads!')//returning
    }
    if (math > 0.5) {//reading the value for > 0.5
        return('Tails!')//returning
    }
    }
    
    /*Example of use.
    alert(CoinFlip())
    or
    console.log(CoinFLip())
    */
