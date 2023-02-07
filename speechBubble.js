function SpeechBubble(){


    this.name = "speechbubble";
	this.icon = "assets/speechbubbleicon.jpg";
    
    
    this.speechBubSize = 50;
    
    this.setup = function(){
        
    }
     
    this.draw = function(){
        if(mouseIsPressed){
            var slider = document.getElementById("myRange");
            
                
            if(slider != null){
                this.speechBubSize = slider.value; 
            }
            
                this.speechbubX = mouseX - this.speechBubSize/2;
                this.speechbubY = mouseY - this.speechBubSize/2;
                image(speechbubbleImage, this.speechbubX, this.speechbubY, this.speechBubSize, this.speechBubSize); 
            }
        
        
    }
    
    this.populateOptions = function() {
		select(".options").html(
			"<table><tr><th>Stamp Size</th><th></th></tr><tr><td><div class='slidecontainer'><input type='range' min='10' max='200' value='50' class='slider' id='myRange'></td></tr></table>");    
        }
    
}
    