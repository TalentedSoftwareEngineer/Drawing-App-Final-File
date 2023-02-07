function Eraser(){
    
    this.icon = "assets/eraser.jpg";
	this.name = "eraser";

 //vvv This code when you erase gives a rectangle and not sure why. Only does this when the slider is involved. 
    
    var previousMouseX = -1;
	var previousMouseY = -1;
    var eraserC = 255
    var eraserSize = 15;
	this.draw = function(){

		if(mouseIsPressed){
            var slider = document.getElementById("myRange");
              
            if(slider != null){
                this.eraserSize = slider.value;
            }
            
            fill(eraserC);
            //check if they previousX and Y are -1. set them to the current
            //mouse X and Y if they are.
                if (previousMouseX == -1){
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                //if we already have values for previousX and Y we can draw a line from 
                //there to the current mouse location
                else{
                    fill(eraserC);
                    ellipse(mouseX, mouseY, this.eraserSize, this.eraserSize);
                    noStroke();
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
		}
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
        
	};
    
    this.populateOptions = function() {
		select(".options").html(
			"<div class='slidecontainer'><input type='range' min='5' max='100' value='10' class='slider' id='myRange'></div>");    
        };
    
    
// vvv This is the alt code that works as intended just need to add a slider to it.  
    
    this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
            fill(eraserC);
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
                fill(eraserC);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                fill(eraserC);
                noStroke();
				ellipse(mouseX, mouseY, 50);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
    };
    
}