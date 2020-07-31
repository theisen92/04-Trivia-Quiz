var highScoreTable = document.getElementById("high-score-list");
var scoreStore = JSON.parse(localStorage.getItem("score"));
var nameStore = JSON.parse(localStorage.getItem("name"));

window.onload = function () {
  if (localStorage !== null) {
    for (var i = 0; i < localStorage.length; i += 2) {
      highScoreTable.innerHTML += `<tr><td>${nameStore}</td><td>${scoreStore}</td></tr>`;
    }
  }
};
