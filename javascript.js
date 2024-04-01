const container = document.getElementById("gridContainer");

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.margin = "0";

        function createCell(a) {
            for (let j = 1; j <= a; j++) {
                const cell = document.createElement("div");
                cell.style.border = "1px solid black";
                cell.style.margin = "0";
                cell.style.backgroundColor = "white";
                cell.style.flex = "1";
                function colorChange(event) {
                    if (event.ctrlKey) {
                        cell.style.backgroundColor = getRandomColor();
                    }
                }
                cell.addEventListener("mouseover", () => {
                    colorChange(event);
                });
                row.appendChild(cell);
            }
        }

        createCell(num);
    }    
}

createGrid(16);

function newGrid() {
    let newGridSize = prompt("Enter a number between 2 and 100 to change the size of the grid cells. Invalid entries will return the default grid.");

    if (newGridSize > 100) {
        newGridSize = 100;
    } else if (newGridSize < 2) {
        newGridSize = 16;
    } else if (newGridSize >= 2 && newGridSize <= 100) {
        newGridSize;
    } else {
        newGridSize = 16;
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(newGridSize);
}

const newGridButton = document.getElementById("newGridBtn");
newGridButton.addEventListener("click", newGrid);