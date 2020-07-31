//Start button vars
var startWrapper = document.getElementById("startBtnWrapper");
var startBtn = document.getElementById("startBtn");
var highScore = document.getElementById("high-score");

//Test vars
var test = document.getElementById("test");
var quizQuestion = document.getElementById("question");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var result = document.getElementById("result");
//Submit vars
var submitBtn = document.getElementById("subBtnWrapper");
var submitTitle = document.getElementById("submit-title");
var score = JSON.parse(localStorage.getItem("score"));
var subName = document.getElementById("submit-name");
var subBtn = document.getElementById("subBtn");

//Score and name store
var scoreStore = [];
var nameStore = [];

//Timer vars
var timer = document.getElementById("timer");
var secLeft = 30;

//Question list and index vars
var currentIndex = 0;

var listQuestions = [
  {
    question: "Which animal does not appear in the Chinese zodiac?",
    optionA: "Goat",
    optionB: "Rabbit",
    optionC: "Swan",
    optionD: "Dog",
    answer: "Swan",
  },
  {
    question: "Where was the 2012 summer olympics held?",
    optionA: "Beijing, China",
    optionB: "Athens, Greece",
    optionC: "Rio de Janeiro, Brazil",
    optionD: "London, United Kingdom",
    answer: "London, United Kingdom",
  },
  {
    question: "What is the name for the Jewish New Year?",
    optionA: "Hanukkah",
    optionB: "Yom Kippur",
    optionC: "Rosh Hashanah",
    optionD: "Shavout",
    answer: "Rosh Hashanah",
  },
  {
    question: "Which planet is furthest away from the sun?",
    optionA: "Neptune",
    optionB: "Pluto",
    optionC: "Uranus",
    optionD: "Mercury",
    answer: "Neptune",
  },
  {
    question: "What is the rarest blood type?",
    optionA: "B -",
    optionB: "AB -",
    optionC: "AB +",
    optionD: "A +",
    answer: "AB -",
  },
];

var lastQuestion = listQuestions.length - 1;

//Timer function
function testTimer() {
  test.removeAttribute("class", "hide");
  startWrapper.setAttribute("class", "hide");
  highScore.setAttribute("class", "hide");
  var countDown = setInterval(function () {
    secLeft--;
    timer.textContent = secLeft + " seconds left in the test";
    //If you run out of time
    if (secLeft <= 0) {
      clearInterval(countDown);
    }
  }, 1000);
}

//Test question function
function currentQuestion() {
  var q = listQuestions[currentIndex];
  question.textContent = q.question;
  optionA.textContent = q.optionA;
  optionB.textContent = q.optionB;
  optionC.textContent = q.optionC;
  optionD.textContent = q.optionD;
}

//When clicking on the test options
test.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button") === true) {
    console.log(event.target.textContent);
  }
  //Getting the question correct
  if (event.target.textContent == listQuestions[currentIndex].answer) {
    result.textContent = "You got it Correct!";
    setInterval(function () {
      result.textContent = "";
    }, 2000);
    secLeft = secLeft + 5;
  }
  //Getting the question wrong
  else {
    result.textContent = "Sorry, your answer is Wrong!";
    setInterval(function () {
      result.textContent = "";
    }, 2000);
    secLeft = secLeft - 5;
  }

  //Going to the next question
  if (currentIndex < lastQuestion) {
    currentIndex++;
    currentQuestion();
  }
  //End of test
  else {
    //End of quiz
    test.setAttribute("class", "hide");
    timer.setAttribute("class", "hide");
    submitBtn.removeAttribute("class", "hide");
    scoreStore.push(secLeft);
    localStorage.setItem("score", JSON.stringify(scoreStore));
    console.log(secLeft);
  }
});

//Clicking the start button
startBtn.addEventListener("click", testTimer);

//Showing the current question
currentQuestion();

//Submit function
submitTitle.textContent = `Your score is ${secLeft}`;

subBtn.addEventListener("click", function () {
  var nameValue = subName.value;

  if (nameValue !== null) {
    nameStore.push(nameValue);
    localStorage.setItem("name", JSON.stringify(nameStore));
    window.location.href = "./high-scores.html";
  }
});

// https://thoughtcatalog.com/kelly-peacock/2020/04/multiple-choice-trivia-questions-and-answers/
