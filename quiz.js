const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [      {
    question: "Mike is part of which faculty:",
    answers: {
      a: "Science",
      b: "Engineering",
      c: "Law",
      d: "Education"
    },
    correctAnswer: "b"
  },
  {
    question: "Mike is enrolled in:",
    answers: {
      a: "Bachelor",
      b: "Masters",
      c: "PhD",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "Mike's hair colour is:",
    answers: {
      a: "Black",
      b: "Brown",
      c: "Grey",
      d: "Pink"
    },
    correctAnswer: "c"
  },
  {
    question: "Mike is passionate about:",
    answers: {
      a: "Biomechanics",
      b: "Bone models",
      c: "Machine learning",
      d: "All of the above"
    },
    correctAnswer: "d"
  }
]
function buildQuiz() {
  // variable to store the HTML output
  const output = [];
  for(i=0; i<quizQuestions.length; i++){
    // store list of answer choices
    const answers = [];
    // for each available answer to this question add an HTML radio button
    for(letter in quizQuestions[i].answers){
      answers.push(
        '<label>'
         + '<input type="radio" name="question'+i+'" value="'+letter+'">'
         + letter + ': '
         + quizQuestions[i].answers[letter]
         + '</label>'
         );
      }
     // add this question and its answers to the output
     output.push(
       '<div class="question">' + quizQuestions[i].question + '</div>'
       + '<div class="answers">' + answers.join('') + '</div>'
       );
    }
     // combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
}
function showResults() {
 // gather answer containers from our quiz
 var answerContainers = quizContainer.querySelectorAll('.answers');
 // keep track of user's answers 
 var numCorrect = 0;
   // for each question find the selected answer
   for(i=0; i<quizQuestions.length; i++){
     userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
       // if answer is correct add to the number of correct answers
       if(userAnswer===quizQuestions[i].correctAnswer){
         numCorrect++;
         // and colour the answers green
         answerContainers[i].style.color = 'lightgreen';
       }
       // if answer is wrong or blank
       else{
         // colour the answers red
         answerContainers[i].style.color = 'red';
       }
     }
     // show number of correct answers out of total
     if (numCorrect === 0) { 
     resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
   }
   if (numCorrect === 1) { 
       resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
     }
     if (numCorrect === 2) { 
       resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
     }
     if (numCorrect === 3) { 
       resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Mike pretty well!";
     }
     if (numCorrect === 4) { 
       resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Mike so well!";
     }
}
//load quiz
buildQuiz();

submitButton.onclick = function() {
    showResults();
   }