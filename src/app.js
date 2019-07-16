import isYes from './isYes.js';

//HTML elements
const quizButton = document.getElementById('quiz-button');
const originSection = document.getElementById('origin');
const habitSection = document.getElementById('habits');
const funFactsSection = document.getElementById('fun-facts');
const score = document.getElementById('score');
const scoreName = document.getElementById('name');
const scorePercentDisplay = document.getElementById('score-percent');

//Pictures
const catEmoji = document.getElementById('catemoji');
const markOne = document.getElementById('mark-1');
const markTwo = document.getElementById('mark-2');
const markThree = document.getElementById('mark-3');

//Button function call
quizButton.onclick = function() {
    toggleSections('add');
};

//Hides elements and calls the quiz function OR unhides elements once the quiz is finished
function toggleSections(action) {
    let hidden;
    if(action === 'add') {
        hidden = true;
        markOne.classList.add('none');
        markTwo.classList.add('none');
        markThree.classList.add('none');
        originSection.classList.add('none');
        habitSection.classList.add('none');
        funFactsSection.classList.add('none');
        catEmoji.classList.remove('none');
        score.classList.add('none');
        
    } else if(action === 'remove') {
        hidden = false;
        originSection.classList.remove('none');
        habitSection.classList.remove('none');
        funFactsSection.classList.remove('none');
        catEmoji.classList.add('none');
        score.classList.remove('none');

        
    } else {
        return;
    }
    if(hidden) {
        setTimeout(() => { playQuiz(); }, 1000); // source: MDN docs on setTimeout
        //I spent way too much time at home trying to get this to work. Lesson learned: never use an alert if well-timed code execution is needed.
    }
}

//Quiz function
function playQuiz(){
    const name = prompt("What's yer name?");
    
    const confirmed = confirm(`Okay ${name}, do you think you can take a quiz about my cats?!`);
    if(!confirmed) {
        toggleSections('remove');
        return;
    }

    alert('Very well! Let the games begin!');

    let correctAnswers = 0;
    
    let firstAnswerMade = false;

    while(!firstAnswerMade){ //Source: MDN documentation on while loops
        const firstAnswer = prompt('Question The First: Alice and Willetta were both born in Washington county. (Y/N)');
        markOne.classList.remove('none');
        if(isYes(firstAnswer) === false) {
            correctAnswers++;
            firstAnswerMade = true;
            markOne.src = '../assets/check.png';
        } else if(isYes(firstAnswer) === true) {
            markOne.src = '../assets/no.png';
            firstAnswerMade = true;
        } else {
            alert('Please answer yes or no!');
        }
    }
    
    let secondAnswerMade = false;

    while(!secondAnswerMade){
        const secondAnswer = prompt('Question The Second: Both the cats howl for their treats at the same time every night. (Y/N)');
        markTwo.classList.remove('none');
    
        if(isYes(secondAnswer) === true) {
            correctAnswers++;
            markTwo.src = '../assets/check.png';
            secondAnswerMade = true;
        } else if(isYes(secondAnswer) === false){
            markTwo.src = '../assets/no.png';
            secondAnswerMade = true;
        } else {
            alert('Please answer yes or no!');
        }
    }
    
    let thirdAnswerMade = false;

    while(!thirdAnswerMade){
        const thirdAnswer = prompt('Question The Third: Alice has terrible and disgusting consequences for eating normal cat food. (Y/N)');
        markThree.classList.remove('none');
        
        if(isYes(thirdAnswer) === false){
            correctAnswers++;
            markThree.src = '../assets/check.png';
            thirdAnswerMade = true;
        } else if(isYes(thirdAnswer) === true) {
            markThree.src = '../assets/no.png';
            thirdAnswerMade = true;
            
        } else {
            alert('Please answer yes or no!');
        }
    }

    //Ending logic to calculate / display score, and unhide all elements.

    alert(`Thank you, ${name}, for listening to me about my cats. Your final score is ${correctAnswers}/3.`);

    const scorePercentage = Math.floor((correctAnswers / 3) * 100); //source: Luke
    
    scoreName.textContent = name;
    scorePercentDisplay.textContent = `${scorePercentage}%`;
    
    switch(scorePercentage){ // source: MDN for switch
        case 100:
            scorePercentDisplay.classList.add('one-hundred');
            break;
        case 66:
            scorePercentDisplay.classList.add('sixty-six');
            break;
        case 33:
            scorePercentDisplay.classList.add('thirty-three');
            break;
        case 0:
            scorePercentDisplay.classList.add('zero');
            break;

    }
    
    toggleSections('remove');
}

