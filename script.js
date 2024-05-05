const numbersPerRow = 5;
const numbersPerColumn = 5;
const maxNumber = 99;

const players = ['Jugador 1', 'Jugador 2', 'Jugador 3'];
const cards = [];

// Función para generar números aleatorios para las tarjetas
function generateNumbers() {
    const numbers = [];
    while (numbers.length < numbersPerRow * numbersPerColumn) {
        const number = Math.floor(Math.random() * maxNumber) + 1;
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}

// Función para inicializar las tarjetas de los jugadores
function initializeCards() {
    for (let i = 0; i < players.length; i++) {
        const numbers = generateNumbers();
        cards.push(numbers);
        const playerCard = document.getElementById(`card${i + 1}`);
        for (let row = 0; row < numbersPerColumn; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < numbersPerRow; col++) {
                const td = document.createElement('td');
                td.textContent = numbers[row * numbersPerRow + col];
                tr.appendChild(td);
            }
            playerCard.appendChild(tr);
        }
    }
}

// Función para marcar los números en las tarjetas cuando se gira la ruleta
function markNumber(number) {
    for (let i = 0; i < cards.length; i++) {
        const playerCard = document.getElementById(`card${i + 1}`);
        const cells = playerCard.getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++) {
            if (parseInt(cells[j].textContent) === number) {
                cells[j].classList.add('marked');
            }
        }
    }
}

// Función para girar la ruleta y marcar los números en las tarjetas
function spinRoulette() {
    const resultElement = document.getElementById('rouletteResult');
    const number = Math.floor(Math.random() * maxNumber) + 1;
    resultElement.textContent = `Resultado: ${number}`;
    markNumber(number);
}

initializeCards();
