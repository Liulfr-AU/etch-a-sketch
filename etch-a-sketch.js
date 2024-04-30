let parentNode = document.querySelector('.grid');

function createGrid(length){
    for(let i=0; i<length; i++){
        let row = document.createElement('div');
        row.classList.add('flex','row')
        parentNode.appendChild(row);

        for(let i=0; i<length; i++){
            let column = document.createElement('div');
            column.classList.add('flex');
            row.appendChild(column);
        }
    }
}

let grid = document.querySelector('.grid');
grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target != grid && !target.classList.contains('row')){
    target.style.backgroundColor = randomColor();
    target.style.opacity = (parseFloat(target.style.opacity) || 0) + 0.2;
    }
});

function randomColor(){
    let letters = '0123456789abcdef';
    let color = '#';
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

let sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', () => {
    createGrid(getSize());
});

function getSize(){
    let size = prompt('How many squares per side?', '1-100');
    while (true){
        if (size >= 1 && size <= 100){
            parentNode.replaceChildren();
        return size;
        }
        else if (size === null){
            return;
        }
        else size = prompt('Please enter a number between 1 and 100', '1-100');
    }
}

createGrid(30);