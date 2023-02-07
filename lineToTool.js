//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    var lineWeight = 15;

	//draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
            
            var slider = document.getElementById("myRange");
                if(slider != null){
                    this.lineWeight = slider.value;
                }
            
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
                strokeWeight(this.lineWeight);
			}

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
    
        
	};
    
    this.populateOptions = function() {
		select(".options").html(
			"<table><tr><th>Stroke Weight</th><th></th></tr><tr><td><div class='slidecontainer'><input type='range' min='1' max='100' value='1' class='slider' id='myRange'></td></tr></table>");  
        
        
        
        }


}
