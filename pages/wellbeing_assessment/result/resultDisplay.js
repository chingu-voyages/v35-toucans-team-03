// import { tabulateAnswers, sum } from './../js/alcohol_score.js'
// import { newSum } from "../wellbeing_scoring.js";

var showScore = document.querySelector('.progress-tracker');
var newSum = localStorage.getItem('pointsObtained')
// showScore.innerHTML = "Your score will show up here!";

// tabulateAnswers();
showScore.innerHTML = `${newSum}`;



// So here the scale could range from - 54 points to + 54 points in total, 
// and they don't give any advice on how to handle the received results. 
// scores of + 25 or higher = great general well - being
// scores between 0 and 24 = some room for improvement
// scores lower than 0 = seek support to identify ways 
// to improve general well - being by for example talking to a therapist

// TODO: Add status indicator for assessment 

function scoreRating(score) {

    const scorePerformance = document.querySelector('.score-helper')
    const rateWellbeing = document.querySelector('.msg-highlight');
    const suggestionsList = document.querySelector('.suggestions-wrap');

    if (score >= 25) {

        scorePerformance.textContent = 'excellent score';
        rateWellbeing.textContent = 'great general well-being';
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
		        <li class="suggested-item"><span class="suggested-item-text">You are in good shape</span></li>
            </ul >`;

    } else if (score < 25 && score > 0) {

        scorePerformance.textContent = 'average score'
        rateWellbeing.textContent = ' at lesser risk but there is some room for improvement'
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
		<li class="suggested-item"><span class="suggested-item-text">Think positively always</span></li>
		<li class="suggested-item"><span class="suggested-item-text">Eat healthy</span></li>
		<li class="suggested-item"><span class="suggested-item-text">Don't overthink</span></li>
        <li class="suggested-item"><span class="suggested-item-text">Surround yourself with good people</span></li>
        </ul >`
    } else {

        scorePerformance.textContent = 'low score';
        rateWellbeing.textContent = 'at high risk and should seek support to identify ways to improve general well-being';
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
		        <li class="suggested-item"><span class="suggested-item-text">See a therapist</span></li>
		        <li class="suggested-item"><span class="suggested-item-text">Get help</span></li>
            </ul >`;
    }
}

scoreRating(newSum)


function goToHomePage() {
    location.href = "./../../../";
}

function startOver() {
    history.back()
    newSum = 0;
}

function newTest() {
    window.history.go(-3);
}