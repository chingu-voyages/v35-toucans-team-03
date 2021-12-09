/* the steps :
we should initialise the scores
if the user choose this ,that's what gonna happen
display the result */

// function to calculate the score of the assessement
var button = document.querySelector(".submit-btn")
var form = document.querySelector('.wellbeing-assessment-form');

var choices = document.getElementsByTagName('input');

// if (form !== null) {
//     form.addEventListener(
//         'submit', tabulateAnswers
//     );
// }

// button.addEventListener(
//     'click', tabulateAnswers, false
// )

// console.log(form)

let sum;

function tabulateAnswers() {

    // initialize variables for each choice's score
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
    var c6score = 0;
    var c7score = 0;


    // get a list of the radio inputs on the page
    // var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (let i = 0; i < choices.length; i++) {
        // if the radio is checked..
        if (choices[i].checked) {

            if (choices[i].value == 'c1') {
                // c1 = -3 points
                c1score = c1score - 3;
            }

            if (choices[i].value == 'c2') {
                // c2 = -2 points
                c2score = c2score - 2;
            }
            if (choices[i].value == 'c3') {
                // c3 = -1 points
                c3score = c3score - 1;
            }
            if (choices[i].value == 'c4') {
                // c4 = 0 points
                c4score = c4score + 0;
            }
            if (choices[i].value == 'c5') {
                // c5 = +1 points
                c5score = c5score + 1;
            }
            if (choices[i].value == 'c6') {
                // c6 = +2 points
                c6score = c6score + 2;
            }

            if (choices[i].value == 'c7') {
                // c7 = +3 points
                c7score = c7score + 3;
            }

        }


        // Find out which choice got the highest score.
        sum = c1score + c2score + c3score + c4score + c5score + c6score + c7score;
        if (sum > 0) {
            window.location.href = './result';
            choices[i].checked = false
        }
    }

    localStorage.setItem('pointsObtained', sum);

    window.onload = onPageLoad();
    function onPageLoad() {
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].checked == true) {
                choices[i].checked = true;
            } else {
                choices[i].checked = false;
            }
        }
    }
    return sum
}



// program the reset button
function resetAnswer() {
    // go to previous page

}

var newSum = localStorage.getItem('pointsObtained')


// Values for Options

// For Q4, Q5, Q6, Q7, Q10, Q14, Q15, Q16:

// 		strongly Agree = c1
// 		somewhat Agree = c2
// 		a little agree = c3
// 		Neither agree nor disagree = c4
// 		A little disagree = c5
// 		Somewhat disagree = c6
// 		Strongly disagree = c7

// For Q1, Q2, Q3, Q8, Q9, Q11, Q12, Q13, Q17, and Q18:

// 			Strongly disagree = c1
// 			Somewhat disagree = c2
// 			A little disagree = c3
// 			Neither agree nor disagree = c4
// 			a little agree = c5
// 		somewhat Agree = c6
// 		strongly Agree = c7
