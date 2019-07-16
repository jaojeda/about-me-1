function isYes(text){
    text = text.toLowerCase();
    if(text === 'yes' || text === 'y'){
        return true;
    } else if(text === 'no' || text === 'n') {
        return false;
    } else {
        return 'error';
    }
}

export default isYes;