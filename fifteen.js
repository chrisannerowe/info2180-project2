function arrangeTiles(area) {
    var offset_left = 0;
    var offset_top = 0;
    var cursor = 0;
    
    var bg_offset_left = 0;
    var bg_offset_top = 0;
    
    for(var i=0; i<4; i++) {
        for(var j=0; j< 4; j++) {
            if (cursor < area.length) {
                area[cursor].style.left = "" + offset_left + "px";
                area[cursor].style.top = "" + offset_top + "px";
                offset_left += 99;
                
                area[cursor].style.backgroundPositionX = "" + bg_offset_left + "px";
                area[cursor].style.backgroundPositionY = "" + bg_offset_top + "px";
                bg_offset_left -= 98;
                
                area[cursor].on("click", MoveRight);
                cursor++; 
            }
           
        }
        offset_left = 0;
        offset_top += 99;
        bg_offset_left = 0;
        bg_offset_top -= 98;
    }
}

function MoveRight() {
    alert("this");
}

$(document).ready(function(){
    var puzzleArea = $("#puzzlearea").children();
    puzzleArea.addClass("puzzlepiece"); 
    puzzleArea.addClass("movablepiece");
    arrangeTiles(puzzleArea);
    

});