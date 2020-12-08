//Get the elements you’ll need from your HTML
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
var missed = 0;
const startGameButton = document.querySelector('a');

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
startGameButton.addEventListener('click', (e) => {
  startButton = e.target;
  startButton.parentNode.style.display = 'none';
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

//Set the game display.


//Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, for each character in the array, you’ll create a list item, put the character inside of the list item, and append that list item to the #phrase ul in your HTML. If the character in the array is a letter and not a space, the function should add the class “letter” to the list item. You’ll need to write the addPhraseToDisplay function so that it can take any array of letters and add it to the display. To do that, the function will need to take an array as a parameter:

function addPhraseToDisplay(characters){
  const phraseUL = document.getElementById('phrase');

  for(var i = 0; i < characters.legth; i++){
    const li = document.createElement('li');
    characterLI = li.textContent(characters[i]);
    overlayDiv.appendChild(characterLI);
    console.log(characterLI);
  }
}
addPhraseToDisplay(getRandomPhraseAsArray(phrases));
