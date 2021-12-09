// import { tabulateAnswers, sum } from './../js/alcohol_score.js'
import { newSum } from "../wellbeing_scoring.js";

var showScore = document.querySelector('.progress-tracker');
// showScore.innerHTML = "Your score will show up here!";

// tabulateAnswers();
showScore.innerHTML = `${newSum}%`;
// console.log(sum)
// var button = document.getElementById('button');
// function goBack() {
//     window.history.back()
// }


// var button2 = document.getElementById('button2');

// function newTest() {
//     window.history.go(-2)
// }


// button.addEventListener('click', goBack)
// button2.addEventListener('click', newTest)
