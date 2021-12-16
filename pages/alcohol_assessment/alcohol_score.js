/* the steps :
we should initialise the scores
if the user choose this ,that's what gonna happen
display the result */

var button = document.querySelector(".submit-btn")
var form = document.querySelector('.alcohol-assessment-form');

var choices = document.getElementsByTagName('input');


// store sum of scores
let sum;

// function to calculate the score of the assessement
/* the steps :
we should initialise the scores
if the user choose this ,that's what gonna happen
display the result */


function tabulateAnswers() {
  // initialize variables for each choice's score
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;
  var c5score = 0;
  var c6score = 0;
  var c7score = 0;
  var c8score = 0;



  // get a list of the radio inputs on the page
  // loop through all the radio inputs
  var label = document.querySelector('.option-content')

  for (i = 0; i < choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      // each choice = 2 points except last two questions

      //  CHOICE 1 
      if (choices[i].value == 'c1') {
        c1score = c1score + 2;
      }




      // CHOICE 2 all
      if (choices[i].value == 'c2') {
        c2score = c2score + 2;
      }

      // CHOICE 3 
      if (choices[i].value == 'c3') {
        c3score = c3score + 2;
      }


      // CHOICE 4 all
      if (choices[i].value == 'c4') {
        c4score = c4score + 2;
      }


      // CHOICE 5 
      if (choices[i].value == 'c5') {
        c5score = c5score + 2;
      }


      // CHOICE 1 FOR QUESTION 9 AND QUESTION 10
      if (choices[i].name == 'q9' || choices[i].name == 'q10') {

        if (choices[i].value == 'c6') {

          // Never - 0 points

          c6score = c6score + 0;
        }
      }

      // CHOICE 2 FOR QUESTION 9 AND QUESTION 10
      if (choices[i].name == 'q9' || choices[i].name == 'q10') {

        if (choices[i].value == 'c7') {

          // "Yes, but not in the last year" = 2 points,

          c7score = c7score + 2;
        }
      }

      // CHOICE 3 FOR QUESTION 9 AND QUESTION 10
      if (choices[i].name == 'q9' || choices[i].name == 'q10') {

        if (choices[i].value == 'c8') {

          // "Yes, In the last year" = 4 points,

          c8score = c8score + 4;
        }
      }

    }

    // Find highest of all choices scores.
    let highest = Math.max(c1score, c2score, c3score, c4score, c5score)

    // last 2 questions do not follow above pattern so
    //  Add the sum of last question choices to the highest value 
    sum = highest + c6score + c7score + c8score;
    // TRIGGER RESULT PAGE
    if (sum >= 0) {
      window.location.href = './result';
      choices[i].checked = false;

    }
  }


  // ADD  OBTAINED SCORE TO BROWSER STORAGE
  localStorage.setItem('alcoholPointsObtained', sum);


  // CLEAR SELECTION ON PAGE RELOAD
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
  // console.log(c6score, c7score, c8score)
  // console.log(sum)
  return sum
}



// program the reset button
function resetAnswer() {
  // go to previous page

}

// RETRIEVE SUM
var alcoholSum = localStorage.getItem('alcoholPointsObtained')


  // All of the answers have the same pattern apart 
  // from the last two questions,
  // where "Never" = 0 points,
  // "Yes, but not in the last year" = 2 points,
  // "Yes, in the last year" = 4 points.


