var obj00 = {
    "x": 0,
    "y": 0,
    "locked": false,
    "obstacle": false,
    "unit": true,
    "poi": false
};

var obj10 = {
    "x": 1,
    "y": 0,
    "locked": false,
    "obstacle": false,
    "unit": false,
    "poi": false
};

var obj20 = {
    "x": 2,
    "y": 0,
    "locked": false,
    "obstacle": true,
    "unit": false,
    "poi": false
};

var obj30 = {
    "x": 3,
    "y": 0,
    "locked": false,
    "obstacle": false,
    "unit": false,
    "poi": true
};

// prendo tutte le celle esistenti della tabella
var allTableCells = document.getElementsByTagName("td");

// creo array con oggetti dal json
var grid = [obj00, obj10, obj20, obj30];

// per ogni oggetto del json, se è un'unità oppure un ostacolo oppure un POI,
// metto nella rispettiva td l'informazione
for (var i = 0; i< grid.length; i++) {
    var obj = grid[i];
    if (obj.unit === true) {
        for (var j = 0; j < allTableCells.length; j++) {
            if (i === j) {
                allTableCells[i].innerHTML = "U";
                allTableCells[i].style.backgroundColor = "green";
            }
        }
    }
    if (obj.poi === true) {
        for (var j = 0; j < allTableCells.length; j++) {
            if (i === j) {
                allTableCells[i].innerHTML = "P";
                allTableCells[i].style.backgroundColor = "yellow";
            }
        }
    }
    if (obj.obstacle === true) {
        for (var j = 0; j < allTableCells.length; j++) {
            if (i === j) {
                allTableCells[i].innerHTML = "O";
                allTableCells[i].style.backgroundColor = "red";
            }
        }
    }
}
