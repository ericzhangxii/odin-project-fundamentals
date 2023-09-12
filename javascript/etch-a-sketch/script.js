const body = document.querySelector("body");


function createRow(){
    let row = document.createElement("div");
    row.style.display = "flex";
    for(let i = 0; i<16; i++){
        let cell = document.createElement("div")
        cell.classList.add("cell")
        row.appendChild(cell);
    }
    return row
}

function createGrid(){
    let grid = document.createElement("div");
    for(let i = 0; i<16;i++){
        let row = createRow()
        grid.appendChild(row)
    }
    return grid;
}

let mygrid = createGrid();
body.appendChild(mygrid);

const cells = document.querySelectorAll(".cell");
cells.forEach(cell=>{
    cell.addEventListener('mouseover',function(){
        this.style.backgroundColor = "green";
    });
})

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click",function(){
    cells.forEach(cell=>{
        cell.style.backgroundColor = "black";
    })
})