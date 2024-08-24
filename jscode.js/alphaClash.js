// function play(){
// //  step- 1: hide the home screen. to hidu the scereen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen');
// // console.log(homeSection.classList)

// homeSection.classList.add('hidden'); 


// // show the playground 
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden')
      
// }

function handleKeyboardButtonPress(event){
      const playerPressed = event.key;
      // console.log('player pressed', playerPressed);

      // get the expected to press current-alphabet
      const currentAlphabetElement = document.getElementById('current-alphabet')
      const currentAlphabet = currentAlphabetElement.innerText;
      const expectedAlphabet = currentAlphabet .toLowerCase();
      // console.log(playerPressed ,expectedAlphabet);

      // check matched or not
      if(playerPressed === expectedAlphabet){
            console.log('you get a point');

            const currentScore =  getTrxtElementValueById('current-score');
            
            const updatedScore = currentScore + 1;
            setTextElementValueById('current-score',updatedScore);
           

// // current-score

// const currentScoreElement = document.getElementById('current-score');


// const currentScoreText = currentScoreElement.innerText;

// const currentScore = parseInt(currentScoreText)
// console.log(currentScore)


// const newScore = currentScore +1;

// currentScoreElement.innerText = newScore;





            console.log('you have pressed correctiy',expectedAlphabet);

            removeBackgroundColorById
                  (expectedAlphabet);
            continueGame();
      }
            else{console.log('you missed.you lost a miss') ;
                  const currentLife =getTrxtElementValueById('current-life');
                  const updatedLive =currentLife - 1;
                  setTextElementValueById('current-life',updatedLive);

                  if(updatedLive ===0){
                        gameOver();
                  }
// --------------------------------------------------------------
            // const currentLifeElement = document.getElementById('current-life')
            // const currentLifeText = currentLifeElement.innerText;
            // const currentLife = parseInt(currentLifeText);
            // const newLife = currentLife - 1;
            // currentLifeElement.innerText = newLife;

      }
      }

      


 

// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);







function continueGame(){

      // random alphadet

      const alphabet = getARanndomAlphabet();
      // console.log('your random alphadet', alphabet);
// set current-alphabet

const currentAlphabetElement = document.getElementById('current-alphabet');

currentAlphabetElement.innerText = alphabet;
// set Background Color

addBackgroundColorById
(alphabet);


}

function play(){
      hideElmentById('home-screen')
      hideElmentById('final-score')
      showElementById('play-ground')
      // reset score and life
     setTextElementValueById('current-life',5)
     setTextElementValueById('current-score',0)   
      
      continueGame()
}

function gameOver(){
      hideElmentById('play-ground')
      showElementById('final-score')
      // updade finar score
      //1-get the final score
      const lastScore = getTrxtElementValueById('current-score');
      console.log(lastScore);
      setTextElementValueById('last-score',lastScore)


const currentAlphabet = getElementTextById('current-alphabet');
// console.log(crrenAlphabet);
removeBackgroundColorById(currentAlphabet);}