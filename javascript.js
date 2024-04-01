const container = document.getElementById("gridContainer");

//The random integer function is needed to pull a random number between 0 and 255 in the rgba randomizer function.
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function rgbaRandomizer(a) {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
}

function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.margin = "0";

        function createCell(num2) {
            for (let j = 1; j <= num2; j++) {
                const cell = document.createElement("div");
                cell.style.border = "1px solid black";
                cell.style.margin = "0";
                cell.style.backgroundColor = "rgba(255, 255, 255, 1)";
                cell.style.flex = "1";
                
                let a = 0;

                function colorChange(event) {
                    if (event.ctrlKey) {
                        cell.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
                    }
                }
                
                function increaseOpacity(event) {
                    if (event.ctrlKey) {
                        a += 0.1;
                        cell.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
                        // console.log(cell.style.backgroundColor); For debugging
                    }
                }

                cell.addEventListener("mouseover", () => {
                    colorChange(event);
                    increaseOpacity(event);
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

function colorGrid(num) {
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
                cell.style.backgroundColor = "rgba(255, 255, 255, 1)";
                cell.style.flex = "1";
                
                let alpha = 0;

                function colorChange(event) {
                    if (event.ctrlKey) {
                        cell.style.backgroundColor = rgbaRandomizer(0.1);
                    }
                }
                
                function increaseOpacity(event) {
                    if (event.ctrlKey) {
                        alpha += 0.1;
                        cell.style.backgroundColor = rgbaRandomizer(alpha);
                        //console.log(cell.style.backgroundColor); For debugging
                    }
                }

                cell.addEventListener("mouseover", () => {
                    colorChange(event);
                    increaseOpacity(event);
                });
                
                row.appendChild(cell);
            }
        }

        createCell(num);
    }    
}

function newColorGrid() {
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
    colorGrid(newGridSize);
}

const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", newColorGrid);