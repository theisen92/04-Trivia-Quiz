var highScoreTable = document.getElementById("high-score-list");
var scoreStore = JSON.parse(localStorage.score);

var scoreSorted = scoreStore.sort(function (a, b) {
  return b.score - a.score;
});

var clearBtn = document.getElementById("clearBtn");

window.onload = function () {
  if (localStorage !== null) {
    for (var i = 0; i < scoreStore.length; i++) {
      highScoreTable.innerHTML += `<tr><td>${scoreStore[i].name}</td><td>${scoreStore[i].score}</td></tr>`;
    }
  }
};

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});
