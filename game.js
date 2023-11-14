// // Iteration 1: Declare variables required for this game
// const body = document.getElementById("game-body");
// let zombie_id = 1;



// // Iteration 1.2: Add shotgun sound
// let shotgun = new Audio("assets/shotgun.wav");

// body.onclick = () => {
//   shotgun.pause();
//   shotgun.currentTime = 0;
// //   shotgun.play();
// };

// // Iteration 1.3: Add background sound
// let bgm = new Audio("assets/bgm.mp3");

// bgm.play();
// bgm.loop = true;

// // Iteration 1.4: Add lives
// let lives = 4;

// // Iteration 2: Write a function to make a zombie
// function makezombie() {
//   body.innerHTML += `<img src='assets/zombie-${randomnum(
//     1,
//     6
//   )}.png' class='zombie-image' id='zombie${zombie_id}'/>`;
//   let currentzombie = document.querySelector(`#zombie${zombie_id}`);
//   currentzombie.style.transform = `translateX(${randomnum(20, 80)}vw)`;
//   currentzombie.onclick = () => {
//     destroy(currentzombie);
//   };

//   zombie_id++;
// }
// makezombie();



// // Iteration 5: Creating timer

// var timeLeft = 60;

// timer.innerText = timeLeft; 
// setInterval(() => {
//     const timer = document.getElementById("timer");
//     // console.log("1");
//     timeLeft=timeLeft-1;
//     // console.log(timeLeft,timer);
//     timer.innerText = `${timeLeft}`;
//     if (timeLeft == 0) {
//         window.location.href = "win.html";
//     }
// }, 1000);
// Iteration 1: Declare variables required for this game
const body = document.getElementById("game-body");
let zombie_id = 1;



// Iteration 1.2: Add shotgun sound
let shotgun = new Audio("assets/shotgun.wav");

body.onclick = () => {
  shotgun.pause();
  shotgun.currentTime = 0;
//   shotgun.play();
};

// Iteration 1.3: Add background sound
let bgm = new Audio("assets/bgm.mp3");

bgm.play();
bgm.loop = true;

// Iteration 1.4: Add lives
let lives = 4;

// Iteration 2: Write a function to make a zombie
function makezombie() {
  body.innerHTML += `<img src='assets/zombie-${randomnum(
    1,
    6
  )}.png' class='zombie-image' id='zombie${zombie_id}'/>`;
  let currentzombie = document.querySelector(`#zombie${zombie_id}`);
  currentzombie.style.transform = `translateX(${randomnum(20, 80)}vw)`;
  currentzombie.onclick = () => {
    destroy(currentzombie);
  };

  zombie_id++;
}
makezombie();

function randomnum(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

// Iteration 3: Write a function to check if the player missed a zombie
function checkzombie() {
  if (zombie.getBoundingClientRect().top >= 0) {
    destroy(zombie);
    makezombie();
    lives--;
    if (lives == 0) {
      location.href = "game-over.html";
    }
  }
}
// checkzombie()

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
// const zombieimage=document.querySelector('.zombie-image')

function destroy(zombie) {
  zombie.style.display = "none";
  makezombie();
}


// Iteration 5: Creating timer

var timeLeft = 60;

timer.innerText = timeLeft; 
setInterval(() => {
    const timer = document.getElementById("timer");
    // console.log("1");
    timeLeft=timeLeft-1;
    // console.log(timeLeft,timer);
    timer.innerText = `${timeLeft}`;
    if (timeLeft == 0) {
        window.location.href = "win.html";
    }
}, 1000)