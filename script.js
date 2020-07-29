var timer = document.getElementById("timer");
var startWrapper = document.getElementById("startBtnWrapper");
var startBtn = document.getElementById("startBtn");
var test = document.getElementById("test");
var quizQuestion = document.getElementById("question");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var result = document.getElementById("result");
var submit = document.getElementById("submit-wrapper");
var submitBtn = document.getElementById("subBtnWrapper");

var secLeft = 30;
var countDown;
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

function testTimer() {
  test.removeAttribute("class", "hide");
  startWrapper.setAttribute("class", "hide");
  var countDown = setInterval(function () {
    secLeft--;
    timer.textContent = secLeft + " seconds left in the test";
    if (secLeft <= 0) {
      clearInterval(countDown);
      alert(
        "Sorry time ran out! So you don't get to put in a highscore because... well... you didn't really get a \"score\", but you can try again!"
      );
      window.location.reload(true);
    }
  }, 1000);
  return countDown;
}

var currentIndex = 0;

function currentQuestion() {
  var q = listQuestions[currentIndex];
  question.textContent = q.question;
  optionA.textContent = q.optionA;
  optionB.textContent = q.optionB;
  optionC.textContent = q.optionC;
  optionD.textContent = q.optionD;
}

test.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button") === true) {
    console.log(event.target.textContent);
  }
  if (event.target.textContent == listQuestions[currentIndex].answer) {
    result.textContent = "You got it Correct!";
    setInterval(function () {
      result.textContent = "";
    }, 2000);
    secLeft = secLeft + 5;
    console.log(secLeft);
  } else {
    result.textContent = "Sorry, your answer is Wrong!";
    setInterval(function () {
      result.textContent = "";
    }, 2000);
    secLeft = secLeft - 5;
    console.log(secLeft);
  }
  if (currentIndex < lastQuestion) {
    currentIndex++;
    currentQuestion();
  } else {
    clearInterval(countDown);
    localStorage.setItem("Score", secLeft);
    console.log(secLeft);
    test.setAttribute("class", "hide");
    timer.setAttribute("class", "hide");
    submit.removeAttribute("class", "hide");
    submitBtn.removeAttribute("class", "hide");
  }
});

startBtn.addEventListener("click", testTimer);
currentQuestion();

// https://thoughtcatalog.com/kelly-peacock/2020/04/multiple-choice-trivia-questions-and-answers/
