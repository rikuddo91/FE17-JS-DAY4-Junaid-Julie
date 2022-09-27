// Ex Description:

// Many people love games of chance and especially the thrill of  "roll of the dice". For this exercise, create a page with a two-sided layout for two players based on the idea of "roll of the dice".

// When the page loads, a prompt method should appear to receive a string (the name for each player), then display their names in the header of the page, for example, "Thomas vs. Martin".

// In each half of the layout, place a button that calls a function. This function should create one random number. Next, display the number separately and visually appealing in each player's half, so that the player can see what they "rolled". Once both players have rolled, announce the winner based on the highest score! Do your best to create a rich game-design using CSS or Bootstrap.

// var player1 = "Player 1";
// var player2 = "Player 2";
var player1 = prompt("Enter Player 1");
var player2 = prompt("Enter Player 2");
document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;
player1 = document.getElementById("player1");
player2 = document.getElementById("player2");

var message = document.getElementById("msg");
var newGame = document.getElementById("reset");
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var roll1 = document.getElementById("roll1");
var roll2 = document.getElementById("roll2");
roll1.style.display = "inline-block";
var resultp1 = document.getElementById("countp1");
var resultp2 = document.getElementById("countp2");
var player2count = document.getElementById("player2count");
var player1count = document.getElementById("player1count");
player1count.innerText = player1.innerHTML;
player2count.innerText = player2.innerHTML;

function roll(player) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var path = `pics/dice${dice}.png`;

    if (player == "dice1") {
        dice1.title = dice;
        dice1.src = path;
        roll1.style.display = "none";
        roll2.style.display = "inline-block";
        
    } else {
        dice2.title = dice;
        dice2.src = path;
        check();
        newGame.style.display = "block";
        roll2.style.display = "none";
        
    }
}

function check() {
    if (dice1.title > dice2.title) {
        message.innerHTML = `${player1.innerText} is the winner`;
        player1.style.color = "green";
        player2.style.color = "red";
        resultp1.innerHTML += `<p>WINER</p>`;
    } else if (dice1.title < dice2.title) {
        message.innerHTML = `${player2.innerText} is the winner`;
        player1.style.color = "red";
        player2.style.color = "green";
        resultp2.innerHTML += `<p>WINER</p>`;
    } else {
        message.innerHTML = "It's a draw!";
        player1.style.color = "blue";
        player2.style.color = "blue";
    }
    
}

function reset() {
    dice1.src = "pics/blank.png";
    dice2.src = "pics/blank.png";
    newGame.style.display = "none";
    roll1.style.display = "inline-block";
    message.innerHTML = "";
    player1.style.color = "black";
    player2.style.color = "black";
    
}

roll1.addEventListener("click", () => roll("dice1"));
roll2.addEventListener("click", () => roll("dice2"));
newGame.addEventListener("click", () => reset());