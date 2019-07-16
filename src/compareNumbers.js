function compareNumbers(guess, correctNumber){
    if(guess > correctNumber){
        return 1;
    } else if(guess < correctNumber){
        return -1;
    } else {
        return 0;
    }
}

export default compareNumbers;