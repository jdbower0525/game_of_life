function createTable(){
    current_seconds = 0
    var rows = 30
    var cols = 30

    var $table = $("<table>")
    $("#gameboard").empty()
    $("#gameboard").append($table)
    for(var row = 0; row < rows; row++){
        var $row = $("<tr>")
        $table.append($row)
        console.log($row)
        for(var col = 0; col < cols; col++){
            var $col = $("<td>")
            $col.click(clickCell)
            $row.append($col)
            $col.attr("id", row + "_" + col)

        }
    }
}
function clickCell(){
    console.log(this)
    $(this).toggleClass("livecell")
    findNeighbors($(this))
}
function findNeighbors(cell){
    console.log(cell.attr("id").split("_"))
    var x = parseInt(cell.attr("id").split("_")[0])
    var y = parseInt(cell.attr("id").split("_")[1])
    var count = 0
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

    console.log(y)
    console.log(count)
}
$("#cols")
$("#makeTable").click(createTable)
