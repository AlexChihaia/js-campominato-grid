/* 'use strict';


const startButton = document.getElementById('start-button');

function startGame() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        createCell(i);
    }
};


function createCell(i) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;
    cell.addEventListener('click', function () {
        selectCell(cell);
    });
    document.getElementById('board').append(cell);
};


function selectCell(cell) {
    cell.classList.add('clicked');
    console.log('Hai selezionato la cella numero:', cell.innerHTML);
}


startButton.addEventListener('click', function () {
    selectLevel();
    startGame();

});


function selectLevel(cell) {
    let select = document.getElementById('livello-difficolta');
    let value = select.options[select.selectedIndex].value;


    switch (value) {


        case '1':
            console.log('Easy');
            break;
        case '2':
            console.log('Medium');
            break;
        case '3':
            console.log('Hard');
            break;
        default:
            console.log('Easy');
    }
}
 */

'use strict';


const startButton = document.getElementById('start-button');

function startGame() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        selectLevel(i);
    }
};





function selectCell(cell) {
    cell.classList.add('clicked');
    console.log('Hai selezionato la cella numero:', cell.innerHTML);
}


startButton.addEventListener('click', function () {
    selectLevel();
    startGame();

});


function selectLevel(i) {
    let select = document.getElementById('livello-difficolta');
    let value = select.options[select.selectedIndex].value;
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;
    cell.addEventListener('click', function () {
        selectCell(cell);
    });
    document.getElementById('board').append(cell);


    switch (value) {
        case '1':
            console.log('Easy');
            cell.classList.add('cell-10');
            break;
        case '2':
            console.log('Medium');
            cell.classList.add('cell-9');
            break;
        case '3':
            console.log('Hard');
            cell.classList.add('cell-7');
            break;
        default:
            console.log('Ci hai provato');
            cell.classList.add('cell-10');
    }
};











