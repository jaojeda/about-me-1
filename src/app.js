import isYes from './isYes.js';

const quizButton = document.getElementById('quiz-button');
const originSection = document.getElementById('origins');
const habitSection = document.getElementById('habits');
const funFactsSection = document.getElementById('fun-facts');


quizButton.onClick = function(){
    const name = prompt("What's yer name?");
    
    const confirmed = confirm(`Okay ${name}, do you think you can take a quiz about my cats?!`);
    if(!confirmed) {
        return;
    }

    alert('Very well! I won\'t make this easy!');

    originSection.classList.add('hidden');
    
    const firstAnswer = prompt('Question The First: Alice and Willetta were both born in Washington county. (Y/N)');
    
    originSection.classList.remove('hidden');    
    habitSection.classList.add('hidden');
    
    const secondAnswer = prompt('Question The Second: Both the cats howl for their treats at the same time every night. (Y/N)');
    
    habitSection.classList.remove('hidden');    
    funFactsSection.classList.add('hidden');
    
    const thirdAnswer = prompt('Question The Third: Alice has terrible and disgusting consequences for eating normal cat food. (Y/N)');
    
    funFactsSection.classList.remove('hidden');

    alert(`Thank you, ${name}, for listening to me about my cats.`);
};