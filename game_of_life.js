var rows = 30
var cols = 30
var arena = createTable();

function createTable(){
    var $table = $("<table>")
    $("#gameboard").empty()
    $("#gameboard").append($table)
    for(var row = 0; row < rows; row++){
        var $row = $("<tr>")
        $table.append($row)
        for(var col = 0; col < cols; col++){
            var $col = $("<td>")
            $col.click(clickCell)
            $row.append($col)
            $col.attr("id", row + "_" + col)
        }
    }
}
function clickCell(){
    $(this).toggleClass("livecell")
    findNeighbors($(this))
    tick(count)
}
function findNeighbors(cell){
    count = 0
    console.log(cell.attr("id").split("_"))
    var x = parseInt(cell.attr("id").split("_")[0])
    var y = parseInt(cell.attr("id").split("_")[1])
    var neighbors = [$("#" + (x-1) + "_" + (y-1)),
                     $("#" +  x    + "_" + (y-1)),
                     $("#" + (x+1) + "_" + (y-1)),
                     $("#" + (x-1) + "_" +  y),
                     $("#" + (x+1) + "_" +  y),
                     $("#" + (x-1) + "_" + (y+1)),
                     $("#" +  x    + "_" + (y+1)),
                     $("#" + (x+1) + "_" + (y+1))
                 ]
    for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i].hasClass("livecell")){
            count++
        }
    }
}
function updateCellState(x, y, new_table) {
	var cell_state = table[y][x];
	var count = 0;
    var x = parseInt(cell.attr("id").split("_")[0])
    var y = parseInt(cell.attr("id").split("_")[1])
    var neighbors = [$("#" + (x-1) + "_" + (y-1)),
                     $("#" +  x    + "_" + (y-1)),
                     $("#" + (x+1) + "_" + (y-1)),
                     $("#" + (x-1) + "_" +  y),
                     $("#" + (x+1) + "_" +  y),
                     $("#" + (x-1) + "_" + (y+1)),
                     $("#" +  x    + "_" + (y+1)),
                     $("#" + (x+1) + "_" + (y+1))
                 ]
    for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i].hasClass("livecell")){
            count++
        }
    }
    if (cell_state) {
        if (living_neighbors < 2) {
            new_table[y][x] = false;
        } else if (living_neighbors > 3) {
            new_table[y][x] = false;
        } else {
            new_table[y][x] = true;
        }
    } else {
        if (living_neighbors == 3) {
            new_table[y][x] = true;
        } else {
            new_table[y][x] = false;
        }
    }
}


// function tick(count){
//     console.log(count)
//     for(var x = 0; x < rows; x++){
//         for(var y = 0; y < cols; y++){
// if(count === 0){
//     $(this).hasClass("deadcell")
// }
// if(count === 2){
// }
// if(count === 3){
//     $(this).hasClass("livecell")
// }
//         }
//     }
// }

$("#cols")
$("#makeTable").click(createTable)
$("#startButton").click(tick(findNeighbors(count)))
