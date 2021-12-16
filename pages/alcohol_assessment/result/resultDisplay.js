
var showScore = document.querySelector('.progress-tracker');
var alcoholSum = localStorage.getItem('alcoholPointsObtained')
// showScore.innerHTML = "Your score will show up here!";

// tabulateAnswers();
showScore.innerHTML = `${alcoholSum}`;
// console.log(alcoholSum)



// Official interpretation of scores:
// ● 0 to 7 indicates low risk
// ● 8 to 15 indicates increasing risk
// ● 16 to 19 indicates higher risk,
// ● 20 or more indicates possible dependence

// TODO: Add status indicator for assessment 

function scoreRating(score) {

    const scorePerformance = document.querySelector('.score-helper')
    const alcoholStatus = document.querySelector('.status-indicator')
    const rateAlcohol = document.querySelector('.msg-highlight');
    const suggestionsList = document.querySelector('.suggestions-wrap');

    if (score >= 20) {

        scorePerformance.textContent = 'weak score';
        alcoholStatus.textContent = 'addicted to alcohol';
        rateAlcohol.textContent = 'showing an indication of possible dependence';
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
		        <li class="suggested-item"><span class="suggested-item-text">Seek help</span></li>
		        <li class="suggested-item"><span class="suggested-item-text">Consult a doctor</span></li>
		        <li class="suggested-item"><span class="suggested-item-text">Quit drinking or reduce intake if possible</span></li>

            </ul >`;

    } else if (score >= 16 && score <= 19) {

        scorePerformance.textContent = 'fair score'
        alcoholStatus.textContent = 'not addicted to alcohol';
        rateAlcohol.textContent = ' at a higher risk and should take precautions'
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
		        <li class="suggested-item"><span class="suggested-item-text">Go for check up</span></li>
		        </ul >`
    }

    else if (score >= 8 && score <= 15) {

        scorePerformance.textContent = 'alcoholic in nature'
        alcoholStatus.textContent = 'showing tendencies of addiction';
        rateAlcohol.textContent = ' at increasing risk'
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
        <li class="suggested-item"><span class="suggested-item-text">You should monitor your alcohol intake</span></li>
        </ul >`
    }
    else {

        scorePerformance.textContent = 'good score';
        alcoholStatus.textContent = 'within safe consumption limit of alcohol intake';
        rateAlcohol.textContent = 'at low risk';
        suggestionsList.innerHTML =
            `<ul class="suggestions-group">
		        <li class="suggested-item"><span class="suggested-item-text">Always check your consumption with your health status</span></li>
		        <li class="suggested-item"><span class="suggested-item-text">You may reduce intake to prevent addiction.</span></li>
            </ul >`;
    }
}

scoreRating(alcoholSum)


function goToHomePage() {
    location.href = "./../../../";
}

function startOver() {
    history.go(-2)
    alcoholSum = 0;
}

function newTest() {
    window.history.go(-4);
}
