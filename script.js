let playerResult = JSON.parse(localStorage.getItem('playerResult')) || { playerX: 0, playerY: 0 };

showResult();

let click1 = document.querySelector('.click1');
let click2 = document.querySelector('.click2');
let click3 = document.querySelector('.click3');
let click4 = document.querySelector('.click4');
let click5 = document.querySelector('.click5');
let click6 = document.querySelector('.click6');
let click7 = document.querySelector('.click7');
let click8 = document.querySelector('.click8');
let click9 = document.querySelector('.click9');

let array = [
  [click1,click2,click3],
  [click4,click5,click6],
  [click7,click8,click9]
]




let currentPlayer = 1;
let buttonElement = document.querySelectorAll('.click')
buttonElement.forEach(button => {
  button.addEventListener('click', () => {
    
    if (currentPlayer === 1) {
      button.innerHTML = `<img class="circle-image" src="circle.svg" alt="">`;
      currentPlayer = 2;
    } else {
      button.innerHTML = `<img class="cross-image" src="cross.svg" alt="">`; 
      currentPlayer = 1;
    }
    calculateResult();
    showResult();
    
  })
})

function calculateResult() {

  let boardFilled = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (array[i][j].innerHTML === "") {
        boardFilled = false;
        break; // Exit the loop if any cell is empty
      }
    }
  }

  for (let i=0; i<3; i++) {
    if (array[i][0].innerHTML !== "" &&array[i][0].innerHTML === array[i][1].innerHTML && array[i][0].innerHTML === array[i][2].innerHTML) {
      if (array[i][0].innerHTML=== `<img class="circle-image" src="circle.svg" alt="">`) {
        alert('Player Y wins the game')
        playerResult.playerY+=1;
      } else {
        alert('Player X wins the game')
        playerResult.playerX+=1;
      }
    }
  }

  for (let i=0; i<3; i++) {
    if (array[0][i].innerHTML !== "" && array[0][i].innerHTML===array[1][i].innerHTML && array[0][i].innerHTML===array[2][i].innerHTML) {
      if (array[0][i].innerHTML=== `<img class="circle-image" src="circle.svg" alt="">`) {
        alert('Player Y wins the game')
        playerResult.playerY+=1;
      } else {
        alert('Player X wins the game')
        playerResult.playerX+=1;
      }
    } 
  }

    if (array[0][0].innerHTML === array[2][2].innerHTML && array[0][0].innerHTML === array[1][1].innerHTML && array[0][0].innerHTML !== "" && array[1][1].innerHTML !== "" && array[2][2].innerHTML !== "") {
      if (array[0][0].innerHTML=== `<img class="circle-image" src="circle.svg" alt="">`) {
        alert('Player Y wins the game')
        playerResult.playerY+=1;
      } else {
        alert('Player X wins the game')
        playerResult.playerX+=1;
      }

    }

    if (array[0][2].innerHTML === array[1][1].innerHTML && array[0][2].innerHTML === array[2][0].innerHTML && array[0][2].innerHTML !== "" && array[1][1].innerHTML !== "" && array[2][0].innerHTML !== "") {
      if (array[0][2].innerHTML=== `<img class="circle-image" src="circle.svg" alt="">`) {
        alert('Player Y wins the game')
        playerResult.playerY+=1;
      } else {
        alert('Player X wins the game')
        playerResult.playerX+=1;
      }
    }

    if (boardFilled) {
      alert('Match tied!');
      return; // Exit the function early if the board is filled
    }

    showResult();
    updateLocalStorage();
}

let restartButtonElement = document.querySelector('.js-restart-button')
restartButtonElement.addEventListener('click', () => {
  buttonElement.forEach(button => {
    button.innerHTML = '';
  })
})

function showResult() {
  let resultDivElement = document.querySelector('.js-result-container');
  resultDivElement.innerHTML = `
  <p class="js-para1 para1">Player Y wins:  ${playerResult.playerY}</p>
  <p class="js-para2 para2">Player X wins: ${playerResult.playerX}</p>`
}

let resetButtonElement = document.querySelector('.js-reset-button')
resetButtonElement.addEventListener('click', () => {
  playerResult = { playerX: 0, playerY: 0 };
  updateLocalStorage();
  showResult()
})

function updateLocalStorage() {
  localStorage.setItem('playerResult', JSON.stringify(playerResult));
};






  

