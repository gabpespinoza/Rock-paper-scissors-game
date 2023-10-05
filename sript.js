let hands = document.querySelectorAll('.hand');
let playerMessage = document.getElementById('player-message');
let computerMessage = document.getElementById('computer-message');
let resultMessage = document.getElementById('result-message');
let slotMachine = document.getElementById('slot-machine');
let computerImage = document.getElementById("computerImage")

//listener
hands.forEach(hand => {
    hand.addEventListener('click', () => {
        const playerHand = hand.id.replace('hand-', '');
        const computerHand = getComputerHand();
        const result = playGame(playerHand, computerHand);

        playerMessage.textContent = `Tu elegiste ${playerHand}`;
        computerMessage.textContent = `La PC eligió ${computerHand}`;
        resultMessage.textContent = result;

    });
});

//funciones
function getComputerHand() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}
function getComputerHand() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * hands.length);
    const handChosen = hands[randomIndex]
    if (handChosen === 'rock') {computerImage.src = 'img/rock.png'}
    if (handChosen === 'paper'){computerImage.src = 'img/paper.png'}
    if (handChosen === 'scissors') {computerImage.src = 'img/scissors.png'}
    return handChosen;
}

function playGame(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return 'Empate';
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        return '¡Ganaste!';
    } else {
        return '¡Perdiste!';
    }
}



/*if (jugador == 1) {
    alert("Elegiste 💎")
}
if (jugador == 2) {
    alert("Elegiste papel📜")
}
if (jugador == 3) {
    alert("Elegiste ✂")
}
if (pc == 1) {
    alert("PC elige 💎")
} else if (pc == 2) {
    alert("Pc elige 📜")
} else if (pc == 3) {
    alert("pc elige ✂")
}
//combate
if (pc == jugador) {
    alert("Empate")
} else if (jugador == 1 && pc == 3) {
    alert("ganaste")
} else if (jugador == 2 && pc == 1) {
    alert("Ganaste")
} else if (jugador == 3 && pc == 2) {
    alert("Ganaste")
} else {
    alert("perdiste")
} */