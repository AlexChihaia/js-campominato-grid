'use strict';





function selectLevel() {
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




const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
    selectLevel();
    startGame();

});


function startGame() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        createCell(i);
    }
};


function createCell(i) {
    const cell = document.createElement('div');
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