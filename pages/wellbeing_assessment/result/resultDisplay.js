// import { newSum } from "../wellbeing_scoring.js";

var showScore = document.querySelector('.progress-tracker');
var newSum = localStorage.getItem('pointsObtained')
// showScore.innerHTML = "Your score will show up here!";

// tabulateAnswers();
showScore.innerHTML = `${newSum}`;
event.stopPropagation()


// So here the scale could range from - 54 points to + 54 points in total, 
// and they don't give any advice on how to handle the received results. 
// scores of + 25 or higher = great general well - being
// scores between 0 and 24 = some room for improvement
// scores lower than 0 = seek support to identify ways 
// to improve general well - being by for example talking to a therapist
var suggestionsList = document.querySelector('.suggestions-wrap')

if (newSum >= 25) {
    suggestionsList.innerHTML = ``
} else if (newSum < 0) {

} else if (newSum > 0 && newSum < 24) {
    suggestionsList.innerHTML =
        `<ul class="suggestions-group">
        < li class="suggested-item" > 
            <span class="suggested-item-text"> Exercise regularly</span></li >
		<li class="suggested-item"><span class="suggested-item-text"> Eat healthy</span></li>
		<li class="suggested-item"><span class="suggested-item-text"> Make sure to eat well</span></li>
		<li class="suggested-item"><span class="suggested-item-text"> Make sure to rest well</span></li>
		</ul >`
}






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
