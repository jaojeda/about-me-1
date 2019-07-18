function getThrowFromNumber(num) {
    switch(num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function getThrow() {
    let rnum = Math.floor(Math.random() * 3);
    return getThrowFromNumber(rnum);
}


export default getThrow;