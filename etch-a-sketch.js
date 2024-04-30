let parentNode = document.querySelector(".grid");

function createGrid(){
    for(let i=0; i<15; i++){
        let row = document.createElement("div");
        row.classList.add('flex','row')
        parentNode.appendChild(row);

        for(let i=0; i<15; i++){
            let column = document.createElement("div");
            column.classList.add('flex');
            row.appendChild(column);
        }
        
    }
}

let grid = document.querySelector('.grid');
grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target != grid)
    target.style.backgroundColor = "black";
});

createGrid();