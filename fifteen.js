function Arrange(area) {
    var offset_left = 0, offset_top = 0, cursor = 0,
        bg_offset_left = 0, bg_offset_top = 0;
    
    for (var i=0; i<4; i++) {
        for(var j=0; j< 4; j++) {
            //Arranges tiles by colums
            if (cursor < area.length) {
                area[cursor].style.left = "" + offset_left + "px";
                area[cursor].style.top = "" + offset_top + "px";
                offset_left += 99;
                
                // Arrange Background position
                area[cursor].style.backgroundPositionX = "" + bg_offset_left + "px";
                area[cursor].style.backgroundPositionY = "" + bg_offset_top + "px";
                bg_offset_left -= 99;
                
                area[cursor].addEventListener("click", Direction);
                cursor++; // Updates the cursor
            }
            // Does nothing if out of array count
        }
        // Changes top offset to arrange next row
        offset_left = 0;
        offset_top += 99;
        bg_offset_left = 0;
        bg_offset_top -= 99;
    }
    
}

function Direction() {
    var point_x = parseInt(this.style.left),
        point_y = parseInt(this.style.top),
        search_x, search_y,
        moveUp = true, moveDown = true,
        moveLeft = true, moveRight = true,
        area = $("#puzzlearea").children();
    
    for (var i=0; i< area.length; i++) {
        search_x = parseInt(area[i].style.left);
        search_y = parseInt(area[i].style.top);
        
        if (search_x == point_x && search_y == point_y - 99) {
            moveUp = false;
        }
        else if (search_x == point_x && search_y == point_y + 99) {
            moveDown = false;
        }
        else if (search_x == point_x - 99 && search_y == point_y) {
            moveLeft = false;
        }
        else if (search_x == point_x + 99 && search_y == point_y) {
            moveRight = false;
        }
        
    }
    
    // Check for edges
    if (point_x == 0) {
        moveLeft = false;
    }
    if (point_x == 99*3) {
        moveRight = false;
    }
    if (point_y == 0) {
        moveUp = false;
    }
    if (point_y == 99*3) {
        moveDown = false;
    }
    
    //Move tile
    if (moveDown) {
        var p_top = parseInt(this.style.top);
        this.style.top = "" + (p_top + 99) + "px";
    }
    else if (moveUp) {
        var p_top = parseInt(this.style.top);
        this.style.top = "" + (p_top - 99) + "px"; 
    }
    else if (moveLeft) {
        var p_top = parseInt(this.style.left);
        this.style.left = "" + (p_top - 99) + "px";
    }
    else if (moveRight) {
        var p_top = parseInt(this.style.left);
        this.style.left = "" + (p_top + 99) + "px";
    }
    
}

function SetMovable(point_x, point_y) {  
    var search_x, search_y,
        area = $("#puzzlearea").children();
    for (var i = 0; i < area.length; i++) {
        search_x = parseInt(area[i].style.left);
        search_y = parseInt(area[i].style.top);
        
        if (search_x == point_x && search_y == point_y)
            area[i].addClass("movablepiece");
    }
}

$(document).ready(function(){
    var puzzle = $("#puzzlearea").children();
    puzzle.addClass("puzzlepiece"); 
    puzzle.addClass("movablepiece");
    Arrange(puzzle);
    

});