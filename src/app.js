import isYes from './isYes.js';

const quizButton = document.getElementById('quiz-button');
const originSection = document.getElementById('origin');
const habitSection = document.getElementById('habits');
const funFactsSection = document.getElementById('fun-facts');
const score = document.getElementById('score');

const catEmoji = document.getElementById('catemoji');
const markOne = document.getElementById('mark-1');
const markTwo = document.getElementById('mark-2');
const markThree = document.getElementById('mark-3');

function toggleSections(action) { //hides the story to make the quiz more difficult, then calls the main quiz function
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
        
    } else if(action === 'remove') {
        hidden = false;
        originSection.classList.remove('none');
        habitSection.classList.remove('none');
        funFactsSection.classList.remove('none');
        catEmoji.classList.add('none');

    } else {
        return;
    }
    if(hidden) {
        setTimeout(() => { playQuiz(); }, 1000); //I spent way too much time at home trying to get this to work. Lesson learned: never use an alert if well-timed code execution is needed.
    }
}

function playQuiz(){
    const name = prompt("What's yer name?");
    
    const confirmed = confirm(`Okay ${name}, do you think you can take a quiz about my cats?!`);
    if(!confirmed) {
        toggleSections('remove');
        return;
    }

    alert('Very well!');

    let correctAnswers = 0;

    const firstAnswer = prompt('Question The First: Alice and Willetta were both born in Washington county. (Y/N)');
    markOne.classList.remove('none');
    
    if(!isYes(firstAnswer)) {
        correctAnswers++;
        markOne.src = '../assets/check.png';
    } else {
        markOne.src = '../assets/no.png';
    }
    
    const secondAnswer = prompt('Question The Second: Both the cats howl for their treats at the same time every night. (Y/N)');
    markTwo.classList.remove('none');
    
    if(isYes(secondAnswer)) {
        correctAnswers++;
        markTwo.src = '../assets/check.png';
    } else {
        markTwo.src = '../assets/no.png';
    }   
    
    const thirdAnswer = prompt('Question The Third: Alice has terrible and disgusting consequences for eating normal cat food. (Y/N)');
    markThree.classList.remove('none');
    
    if(!isYes(thirdAnswer)){
        correctAnswers++;
        markThree.src = '../assets/check.png';
    } else {
        markThree.src = '../assets/no.png';

    }

    alert(`Thank you, ${name}, for listening to me about my cats. Your final score is ${correctAnswers}/3.`);

    score.textContent = `${name}'s final score: ${correctAnswers}/3`
    
    toggleSections('remove');
}


quizButton.onclick = function() {
    toggleSections('add');
};