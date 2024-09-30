createGrid(16);

function createGrid(eatShit) {

    const container = document.querySelector(".container");
    container.innerHTML = "";
    const eatGrid = calcSize(eatShit) + "px";

    container.style.width = eatGrid;
    container.style.height = eatGrid;

    for (let j = 0; j < eatShit; j++) {

        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let i = 0; i < eatShit; i++) {

            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);

            var gridChange = document.getElementsByClassName("grid");
            Array.from(gridChange).forEach(function(xxx) {
            xxx.addEventListener("mouseenter", function() {
            var eatDick = eatColor();
            this.style.background = eatDick;
            });
            });

        }

    }

}

function calcSize(eatGird) {
  return eatGird*10;
}

function eatColor() {

  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';

}

button.addEventListener("click", () => {

  const eatAss = prompt("How many balls need itching?");

  if (eatAss>100) {
    alert("FUCK YOU");
  } else {
    createGrid(eatAss);
  }

});
