'use strict';
// console.log(document.querySelector('.msg').textContent); // Getting text content - "Start guessing..."
// document.querySelector('.msg').textContent = '🎉 Correct Number!'; // Setting text content
// document.querySelector('.score').textContent = 13; // Setting score to 13
// document.querySelector('.number').textContent = 9;
// document.querySelector('.guess-number').value = 23; // Setting input value to 23
// console.log(document.querySelector('.guess-number').value); // Getting input value

const secretNum = Math.trunc(Math.random() * 20) + 1; // Generating random number between 1 to 20
// check btn event listener -- for outputs
// document.querySelector('.check-btn').addEventListener('click', function () {
//   const guessedNum = Number(document.querySelector('.guess-number').value);
//   if (!guessedNum) console.log('⛔ Enter a valid Number!');
//   else if (guessedNum > secretNum) console.log('📈 Too High!');
//   else if (guessedNum < secretNum) console.log('📉 Too Low!');
//   else console.log('🎉 Yep!! You got the Number!');
// });
let score = 20,
  highScore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.hscore').textContent = highScore;

document.querySelector('.check-btn').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess-number').value);

  if (!guessedNumber)
    document.querySelector('.msg').textContent = '⛔ Enter a valid Number!';
  else if (guessedNumber === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    highScore = Math.max(highScore, score);
    document.querySelector('.hscore').textContent = highScore;
    document.querySelector('.msg').textContent = '🎉 BINGO!!';
    document.querySelector('body').style.backgroundColor = '#058800ff';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').style.fontSize = '3rem';
    return;
  } else {
    document.querySelector('.msg').textContent =
      guessedNumber > secretNum ? '📈 Too High!' : '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      document.querySelector('.msg').textContent = '💥 Lost the Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('body').style.backgroundColor = '#a53434ff';
      return;
    }
  }
  // } else if (guessedNumber > secretNum) {
  // document.querySelector('.msg').textContent = '📈 Too High!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // if (score < 1) {
  //   document.querySelector('.msg').textContent = '‼️ Lost the Game!';
  //   document.querySelector('.score').textContent = 0;
  //   document.querySelector('.body').style.backgroundColor = 'red';
  //   return;
  // }
  //   } else if (guessedNumber < secretNum) {
  //     document.querySelector('.msg').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     if (score < 1) {
  //       document.querySelector('.msg').textContent = '‼️ Lost the Game!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.body').style.backgroundColor = 'red';
  //       return;
  //     }
  //   }
  //   else {
  //     document.querySelector('.number').textContent = secretNum;
  //     document.querySelector('.msg').textContent = '🎉 BINGO!!';
  //     document.querySelector('body').style.backgroundColor = '#058800ff';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.score').style.fontSize = '3rem';
  //   }
});
