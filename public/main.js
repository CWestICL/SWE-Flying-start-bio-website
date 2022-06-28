const interests =
["Horror movies",
"David Lynch films",
"The TV show Twin Peaks",
"Heavy metal music",
"Spicy food",
"Instant ramen",
"Retro video games"];

function sayHi() {
  window.alert('Check the console');
  console.log("Hey, what's up? You good?");
}

function intButton() {
  let content = interests[Math.floor(Math.random() * interests.length)];
  //console.log(content);
  document.getElementById("interest-space").innerText = content;
}