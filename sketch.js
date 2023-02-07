//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

function preload(){
    
    starImage = loadImage('./assets/star.png');
    speechbubbleImage = loadImage('./assets/speechbubble.png');
    duckImage = loadImage('./assets/duckStamp.png');
}


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
//    colourP = new ColourPicker();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();
    

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
//	toolbox.addTool(new Eraser());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new StarStamp());
    toolbox.addTool(new SpeechBubble());
//    toolbox.addTool(new TextBox());
//    toolbox.addTool(new ColourDropper());
//    toolbox.addTool(new Colourpicker());
//    toolbox.addTool(new Colourpicker());
	background(255);
    
     

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}