function StarStamp(){
	
	this.name = "starStamp";
	this.icon = "assets/stariconimg.jpg";
    
    
    
    this.starSize = 50;
     
    this.draw = function(){
        if(mouseIsPressed){
            var slider = document.getElementById("myRange");
            
                
            if(slider != null){
                this.starSize = slider.value; 
            }
            
            this.starX = mouseX - this.starSize/2;
            this.starY = mouseY - this.starSize/2;
            image(starImage, this.starX, this.starY, this.starSize, this.starSize); 
            }
    }

        this.populateOptions = function() {
		select(".options").html(
			"<table><tr><th>Stamp Size</th><th></th></tr><tr><td><div class='slidecontainer'><input type='range' min='10' max='200' value='50' class='slider' id='myRange'></td></tr></table>"); 
        }
    

        
            
//            select("#myDropdown").mouseClicked(function() {
//                var button = select("#" + this.elt.id);
//                if (button.html == "#Link 1") {
//                    self.axis = "y";
//                    self.lineOfSymmetry = height / 2;
//                    button.html('Make Vertical');
//                } else {
//                    self.axis = "x";
//                    self.lineOfSymmetry = width / 2;
//                    button.html('Make Horizontal');
//                }
//            });
//        };
        
}