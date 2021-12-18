
var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.',
]

var mantras = [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.',
]


//////////// -- querySelectors -- /////////////////////////
var buttonClearMessage = document.querySelector(".clearButton")
var buttonReceiveMessage = document.querySelector(".btn-box")
var buddhaPic = document.querySelector('.buddhaPic')
var radioMantra = document.querySelector('#mantra-radio')
var radioAffirmation = document.querySelector('#affirmation-radio')
var quoteBox = document.querySelector(".quoteBox")


//////////// -- addEventListeners -- //////////////////////
buttonReceiveMessage.addEventListener('click', displayMessage)
// radioMantra.addEventListener('checked', printMantra)
// radioAffirmation.addEventListener('checked', printAffirmation)
buttonClearMessage.addEventListener('click', clearMessage)

//////////// -- functions -- //////////////////////////////
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//------- clear message button --------------------//
function addClearMessageButton() {
  buttonClearMessage.classList.remove("hidden")
}
function removeClearMessageButton() {
  buttonClearMessage.classList.toggle("hidden")
}

  //------ generate random quote--------------------//
function randomAffirmations() {
  quoteBox.innerText = affirmations[getRandomIndex(affirmations)]
  }

function randomMantra() {
  quoteBox.innerText = mantras[getRandomIndex(mantras)]
}

  //------ receive messages button function----------//
function removeBuddhaPic() {
  buddhaPic.classList.add("hidden");
}
function addBuddhaPic() {
  buddhaPic.classList.remove("hidden")
}




// // Error - no radio buttons checked ----//
// if (!radioAffirmation.checked && !radioMantra.checked) {
//   quoteBox.innerText = "Ya gotta click sumpin'";
//   return;
// }
// // Error - no radio buttons checked ----//


//-------random affirmations------//
function displayMessage() {
  removeBuddhaPic()

// if (!radioAffirmation.checked && !radioMantra.checked) {
  //var emptyHTML = ""
     if (radioAffirmation.checked === true) {
     //emptyHTML +=
     randomAffirmations();
     addClearMessageButton()
   } else if (radioMantra.checked === true) {
     //emptyHTML +=
         randomMantra();
         addClearMessageButton()
       } else {
   quoteBox.innerText = "Please just check a button!!!"
   // removeClearMessageButton();
}
    // var emptyHTML = "";
    // emptyHTML += ``
//quoteBox.innerText = emptyHTML
   }


   function clearMessage() {
     removeClearMessageButton();
     addBuddhaPic();
     quoteBox.innerText = ""


   }
