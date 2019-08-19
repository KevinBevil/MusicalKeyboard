// client-side js
// run by the browser each time your view template is loaded

const c4 = new Audio("sounds/c4.wav");
const db4 = new Audio("sounds/db4.wav");
const d4 = new Audio("sounds/d4.wav");

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
