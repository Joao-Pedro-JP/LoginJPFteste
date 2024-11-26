let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;//-
    clickedCell.textContent = currentPlayer;//+

    checkResult();
}

function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            document.querySelectorAll('.cell')[a].classList.add('winner');//-
            document.querySelectorAll('.cell')[b].classList.add('winner');//-
            document.querySelectorAll('.cell')[c].classList.add('winner');//-
            break;
        }
    }

    if (roundWon) {
        document.getElementById('status').innerHTML = `Jogador ${currentPlayer} venceu!`;//-
        document.getElementById('status').textContent = `Jogador ${currentPlayer} venceu!`;//+
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        document.getElementById('status').innerHTML = 'Empate!';//-
        document.querySelectorAll('.cell').forEach(cell => cell.classList.add('draw'));//-
        document.getElementById('status').textContent = 'Empate!';//+
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').innerHTML = `Vez do jogador ${currentPlayer}`;//-
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));//-
function resetGameState() {//+
    currentPlayer = 'X';//+
    gameState = ['', '', '', '', '', '', '', '', ''];//+
    gameActive = true;//+
}//+
//+
function updateBoardUI() {//+
    document.querySelectorAll('.cell').forEach((cell, index) => {//+
        cell.textContent = gameState[index];//+
    });//+
}//+
//+
// Adiciona o evento de clique às células//+
document.querySelectorAll('.cell').forEach(cell => {//+
    cell.addEventListener('click', handleCellClick);//+
});//+


document.getElementById('status').innerHTML = `Vez do jogador ${currentPlayer}`;

// Função para reiniciar o jogo
function resetGame() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').innerHTML = `Vez do jogador ${currentPlayer}`;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('winner', 'draw');
    });
}

// Adicione um botão de reiniciar no HTML e conecte-o a esta função
