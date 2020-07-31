var submit = document.getElementById("submit-wrapper");
var submitBtn = document.getElementById("subBtnWrapper");
var submitTitle = document.getElementById("submit-title");
var score = localStorage.getItem("Score", "lastChild");
var subName = document.getElementById("submit-name");
var subBtn = document.getElementById("subBtn");
var scoreStore = JSON.parse(localStorage.getItem("score"));

submitTitle.textContent = `Your score is ${scoreStore}`;

subBtn.addEventListener("click", function () {
  var nameValue = subName.value;

  if (nameValue !== null) {
    scoreStore.push(nameValue);
    localStorage.setItem("score", JSON.stringify(scoreStore));
    window.location.href = "./high-scores.html";
  }
});
