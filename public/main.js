/*
const interests = [
  "Horror movies",
  "David Lynch films",
  "The TV show Twin Peaks",
  "Heavy metal music",
  "Spicy food",
  "Instant ramen",
  "Retro video games",
  "Godzilla"
];
*/

let questions = [
  {Name:"Monster movies", Correct:true},
  {Name:"The TV show Twin Peaks", Correct:true},
  {Name:"Heavy metal", Correct:true},
  {Name:"Spicy food", Correct:true},
  {Name:"Retro video games", Correct:true},
  {Name:"FIFA games", Correct:false},
  {Name:"Marvel Comics", Correct:false},
  {Name:"Love Island", Correct:false},
  {Name:"Cryptocurrency", Correct:false},
  {Name:"Jazz", Correct:false},
]

let correctInterests = [];

let progress = 0;
let score = 0;
let question;
let correct = undefined;

document.getElementById("list-space").style.display = "none";

function sayHi() {
  window.alert('Check the console');
  console.log("Hey, how's it going?");
}

function intButton() {
  let content = interests[Math.floor(Math.random() * interests.length)];
  //console.log(content);
  document.getElementById("interest-space").innerText = content;
}

function quizStart() {
  document.getElementById("quiz-btn").style.display = "none";
  document.getElementById("list-space").style.display = "block";
  for (let i = 0; i < 4000; i++) {
    let location1 = Math.floor((Math.random() * questions.length));
    let location2 = Math.floor((Math.random() * questions.length));
    let tmpShuffle = questions[location1];

    questions[location1] = questions[location2];
    questions[location2] = tmpShuffle;
  }
  question = questions.shift();
  //console.log(question);
  progress++
  renderQuiz();
}

function quizYes() {
  if (question.Correct === true) {
    score++
    correct = true;
  }
  else {
    correct = false;
  }

  if (question.Correct === true) {
    correctInterests.push(question);
  }

  question = questions.shift();
  progress++
  //console.log(correctInterests);
  renderQuiz();
}

function quizNo() {
  if (question.Correct === false) {
    score++
    correct = true;
  }
  else {
    correct = false;
  }

  if (question.Correct === true) {
    correctInterests.push(question);
  }

  if (progress < 11) {
  question = questions.shift();
  }
  else {
    question = {Name:"End", Correct:"End"}
  }
  progress++
  //console.log(correctInterests);
  renderQuiz();
}

function renderQuiz() {
  let space = document.getElementById("quiz-space");

  space.innerHTML = ``;

  if (correct === true) {
    space.innerHTML += `
    <span class="correct">Correct!</span><br><br>
    `;
  }
  else if (correct === false) {
    space.innerHTML += `
    <span class="incorrect">Incorrect!</span><br><br>
    `;
  }
  else {
    space.innerHTML += `
    <br><br>
    `;
  }

  if (progress === 11) {
    space.innerHTML += `
    Final score: ${score}<br><br>
    `;
  }
  else {
    space.innerHTML += `
    Question ${progress}/10<br>
    Score: ${score}<br><br>
    Do I like ${question.Name}?<br>
    <button id="yes-btn" onclick="quizYes();">Yes</button>
    <button id="no-btn" onclick="quizNo();">No</button><br><br>
    `;
  }
  let listSpace = document.getElementById("quiz-list");
  listSpace.innerHTML = ``;
  if (correctInterests.length > 0) {
    for (i = 0; i < correctInterests.length; i++) {
      listSpace.innerHTML += `<li>${correctInterests[i].Name}</li>`;
    }
  }
}