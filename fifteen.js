/* global $ */
/**
 *  ID Number:      620078010
 *  Chris-Anne Rowe
 *
 */
 
window.onload = function(){

   
    var puzzlepieces = document.querySelectorAll("#puzzlearea div"); // to select all puzzle pieces
    
      
        var xpos=0; 
        var ypos= 0;
    for(var i=0; i < puzzlepieces.length; i++){  // set layout of tiles
       
        puzzlepieces[i].setAttribute("class", "puzzlepiece") ;
        puzzlepieces[i].style.left= xpos + 'px';
        puzzlepieces[i].style.top= ypos + 'px';
        puzzlepieces[i].style.backgroundPosition= "-" + xpos + "px " + "-" + ypos + "px";
        if (xpos < 300){
          xpos+=100;
        }
        else
        {
            xpos=0;
            ypos+=100;
        }
    }
    
    var BLANKTOP= "300px";
    var BLANKLEFT= "300px";
    var BLOCKTOP, BLOCKLEFT; 
    
    var shufflebutton= document.getElementById('shufflebutton');
    shufflebutton.addEventListener("click", shuffle);
     for(var i=0; i < puzzlepieces.length; i++){
         
          (function(index) {
              
            puzzlepieces[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            
            puzzlepieces[index].addEventListener("click", function(){
            if (validMove(this)){
                     move(puzzlepieces[index]); 
            }
            });
            
            puzzlepieces[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(i);
          
     }
     
     
    function move(puzzlepiece){
            BLOCKTOP=puzzlepiece.offsetTop;
            BLOCKLEFT=puzzlepiece.offsetLeft;
            
            
            puzzlepiece.setAttribute("id", "selected");
            $('#selected').animate(
                    {backgroundImage: "url(background.jpg)",
                	border: "2px solid black",
                	height: "96px",
                	lineHeight: "96px",
                	position: "absolute",
                	textAlign: "center",
                	verticalAlign: "middle",
                	width: "96px",
                    left: BLANKLEFT,
                    top: BLANKTOP
                    
                    });
                  
           
              puzzlepiece.style.top = BLANKTOP;
              puzzlepiece.style.left = BLANKLEFT;
              BLANKTOP= BLOCKTOP + "px";
              BLANKLEFT=BLOCKLEFT + "px";
              puzzlepiece.removeAttribute("id");
              
             
          
    }
          
    
    function validMove(puzzlepiece){
                BLOCKTOP=puzzlepiece.offsetTop;
                BLOCKLEFT= puzzlepiece.offsetLeft;
                var top= BLOCKTOP + "px";
                var left= BLOCKLEFT + "px";
               
                var testleft= Math.abs(parseInt(left) - parseInt(BLANKLEFT));
                if (top == BLANKTOP && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;
                      
                       }
                        
                var testright= Math.abs(parseInt(top) - parseInt(BLANKTOP));
                if (left == BLANKLEFT && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;
                       
                       }
        
    }
    
    function shuffle(){
        var choice;
        for (var i=0; i<100; i++){ 
                choice=  Math.floor(Math.random() * 15);
                move(puzzlepieces[choice]);
        }
        
       
    }
    
};