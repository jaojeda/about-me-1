function isYes(text){
    text = text.toLowerCase();
    if(text === 'yes' || text === 'y'){
        return true;
    } else {
        return false;
    }
}

export default isYes;