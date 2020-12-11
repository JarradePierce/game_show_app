//Get the elements you’ll need from your HTML
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
var missed = 0;
const startGameButton = document.querySelector('a');
let lostHeart = document.querySelectorAll('.tries img');

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
startGameButton.addEventListener('click', (e) => {
  startButton = e.target;
  startButton.parentNode.style.display = 'none';
  console.log('start game button clicked');
});

//Create a phrases array that contains at least 5 different phrases as strings
var phrases = ['javascript', 'ruby', 'front end', 'full stack', 'rails'];

//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(phrasesArray){
  // This function should randomly choose a phrase from the phrases array and split that phrase into a new array of characters. The function should then return the new character array.
  rndNumber = Math.floor(Math.random() * phrasesArray.length);
  newCharacterArray = [];
  for(var i = 0; i < phrasesArray.length; i++){
    if(i === rndNumber){
      phraseCharacters = phrasesArray[i].split('');
      newCharacterArray.push(phraseCharacters);
    }
  }
  return newCharacterArray;
}

// function getCharacters(charactersArray){
//   characters = [];
//   for(var i = 0; i < charactersArray[0].length; i++){
//     character = charactersArray[0][i];
//     characters.push(character);
//   }
//   return characters;
// }
// getCharacters(phrases);

//Set the game display.
//Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, for each character in the array, you’ll create a list item, put the character inside of the list item, and append that list item to the #phrase ul in your HTML. If the character in the array is a letter and not a space, the function should add the class “letter” to the list item. You’ll need to write the addPhraseToDisplay function so that it can take any array of letters and add it to the display. To do that, the function will need to take an array as a parameter:

function addPhraseToDisplay(characters){
  const phraseUL = document.querySelector('#phrase-ul');
  for(var i = 0; i < characters[0].length; i++){
    character = characters[0][i];
    let li = document.createElement('li');
    li.textContent = character;
    if(character !== " "){
      li.className = 'letter';
    }
    phraseUL.appendChild(li);
  }
}
// addPhraseToDisplay(getRandomPhraseAsArray(phrases));
addPhraseToDisplay(getRandomPhraseAsArray(phrases));

// Create a checkLetter function.
// The checkLetter function will be used inside of the event listener you’ll write in the next step.
// This function should have one parameter: the button the player has clicked when guessing a letter.
// The checkLetter function should get all of the
// elements with a class of “letter” (remember that we added the letter class to all of the letters and none of the spaces when we made the game display). The function should loop over the letters and check if they match the letter in the button the player has chosen.
// If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.
// If a match wasn’t found, the function should return null.
function checkLetter(button){
  button = button.textContent;
  match = null;
  console.log(button);
  let lettersArray = document.querySelectorAll('.letter');
  for(var i = 0; i < lettersArray.length; i++){
    letter = lettersArray[i];
    letterText = lettersArray[i].textContent;
    if(button === letterText){
      match = letter;
      letter.classList.add('show');
    }
  }
  return match;
}


// Add an event listener to the keyboard.
// Use event delegation to listen only to button events from the keyboard. When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice. Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks. See the MDN documentation for more details.
// Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound. At this point, you can open the index.html file, click any of the letters on the keyboard, and start to see the letters appear in the phrase.
qwerty.addEventListener('click', (e) => {
  chosen = e.target.tagName;
  button = e.target;
  if(chosen === 'BUTTON'){
    e.target.className = 'chosen';
    e.target.disabled = true;
    let letterFound = checkLetter(button);
    if(letterFound === null){
      lostHeart[missed].src = "images/lostHeart.png";
      missed += 1;
      console.log(missed);
    }
  }
  checkWin();
});

// Count the missed guesses in the game.
//
// If the checkLetter function returns a null value, the player has guessed the wrong letter. In the keyboard event listener, after checkLetter is called, write a statement to check the value of the letterFound variable. If the value is null, remove one of the tries from the scoreboard. If you haven't created it yet, make sure you have a missed variable to store the state of the scoreboard (initialized to 0). When you remove a try from the scoreboard, make sure to increase the missed count by 1.



// Create a checkWin function.
//
// Each time the player guesses a letter, this function will check whether the game has been won or lost. At the very end of the keyboard event listener, you’ll run this function to check if the number of letters with class “show” is equal to the number of letters with class “letters”. If they’re equal, show the overlay screen with the “win” class and appropriate text. Otherwise, if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.
function checkWin(){
  show = document.querySelectorAll('.show');
  letters = document.querySelectorAll('.letter');

  if(show.length === letters.length){
    overlay.className = 'win';
    overlay.style.display = 'flex';
  } else if(missed > 4){
    overlay.className = 'lose';
    overlay.style.display = 'flex';
  }
};
