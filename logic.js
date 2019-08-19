// client-side js
// run by the browser each time your view template is loaded

const c4 = new Audio("sounds/c4.wav");
const db4 = new Audio("sounds/db4.wav");
const d4 = new Audio("sounds/d4.wav");
const eb4 = new Audio("sounds/eb4.wav");
const e4 = new Audio("sounds/e4.wav");
const f4 = new Audio("sounds/f4.wav");
const gb4 = new Audio("sounds/gb4.wav");
const g4 = new Audio("sounds/g4.wav");
const ab4 = new Audio("sounds/ab4.wav");
const a4 = new Audio("sounds/a4.wav");
const bb4 = new Audio("sounds/bb4.wav");
const b4 = new Audio("sounds/b4.wav");

$("#one").on("click", function () {
   c4.currentTime = 0;
   c4.play();
});
$("#two").on("click", function () {
   db4.currentTime = 0;
   db4.play();
});
$("#three").on("click", function () {
   d4.currentTime = 0;
   d4.play();
});
$("#four").on("click", function () {
   eb4.currentTime = 0;
   eb4.play();
});
$("#five").on("click", function () {
   e4.currentTime = 0;
   e4.play();
});
$("#six").on("click", function () {
   f4.currentTime = 0;
   f4.play();
});
$("#seven").on("click", function () {
   gb4.currentTime = 0;
   gb4.play();
});
$("#eight").on("click", function () {
   g4.currentTime = 0;
   g4.play();
});
$("#nine").on("click", function () {
   ab4.currentTime = 0;
   ab4.play();
});
$("#ten").on("click", function () {
   a4.currentTime = 0;
   a4.play();
});
$("#eleven").on("click", function () {
   bb4.currentTime = 0;
   bb4.play();
});
$("#twelve").on("click", function () {
   b4.currentTime = 0;
   b4.play();
});


// our default array of dreams
const dreams = [];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
};
