function DuckStamp(){
    
     this.name = "duckStamp";
	this.icon = "assets/duckStamp.jpg";
    
    this.duckSize = 50;
     
    this.draw = function(){
        if(mouseIsPressed){
            var slider = document.getElementById("myRange");
            
                
            if(slider != null){
                this.duckSize = slider.value; 
            }
            
            this.duckX = mouseX - this.duckSize/2;
            this.duckY = mouseY - this.duckSize/2;
            image(duckImage, this.duckX, this.duckY, this.duckSize, this.duckSize); 
            }
    }
    
    this.populateOptions = function() {
		select(".options").html(
			"<div class='slidecontainer'><input type='range' min='10' max='200' value='10' class='slider' id='myRange'></div>");    
        }
    
}