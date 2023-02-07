function ColourPicker(){
    
    var color_picker;
      
    // Create a color-picker object 
    color_picker = createColorPicker("green");

 
    this.selectedColour = color_picker.color();

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + self.selectedColour);
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id();

		//set the selected colour and fill and stroke
		self.selectedColour = c;
		fill(c);
		stroke(c);

	}

	//load in the colours
	this.loadColours = function() {
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.selectedColour);
		stroke(this.selectedColour);

	};
	//call the loadColours function now it is declared
	this.loadColours();
}
