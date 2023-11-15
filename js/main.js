'use strict';


const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
    const board = document.getElementById('board');
    board.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;
        cell.addEventListener('click', function () {
            cell.classList.add('clicked');
            console.log('Cella cliccata:', i);
        })
        board.append(cell);
    }
});