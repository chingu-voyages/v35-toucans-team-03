/* the steps :
we should initialise the scores
if the user choose this ,that's what gonna happen
display the result */

// function to calculate the score of the assessement
function tabulateAnswers() {
    // initialize variables for each choice's score
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
  
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
        if (choices[i].value == 'c5') {
          c5score = c5score + 1;
        }
  
      }
    }
    
    // Find out which choice got the highest score.
    var maxscore = Math.max(c1score,c2score,c3score,c4score,c5score);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = "alcohol is bad 1 :)";
    }
    if (c2score == maxscore) { // If user chooses the 2 choice the most, this outcome will be displayed.
      answerbox.innerHTML = "alcohol is bad :) 2 ";
    }
    if (c3score == maxscore) { // If user chooses the 3 choice the most, this outcome will be displayed.
      answerbox.innerHTML = "alcohol is bad bad :) 3 ";
    }
    if (c4score == maxscore) { // If user chooses the 4 choice the most, this outcome will be displayed.
      answerbox.innerHTML = "alcohol is bad bad bad :) 4 ";
    }
    if (c5score == maxscore) { // If user chooses the 5 choice the most, this outcome will be displayed.
      answerbox.innerHTML = "alcohol is bad bad bad bad :) 5 ";
    }
  }
  
  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your score will show up here!";
  }
