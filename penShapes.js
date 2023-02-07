function pen() {
	// set the brush style
	strokeWeight(2)
  
	// draw a line from current mouse point to previous mouse point
  line(mouseX, mouseY, pmouseX, pmouseY)
}

function marker() {
	// set the brush style
  noStroke()
  
	// draw a circle at the current mouse point, with diameter of 50 pixels
  circle(mouseX, mouseY, 50)
}

function beads() {
  // set the brush style
  noStroke()

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2
  const midY = (mouseY + pmouseY) / 2

  // draw a circle at the midpoint, with distance as its diameter
  circle(midX, midY, distance)
}

function wiggle() {
  // set the brush style
  strokeWeight(2)
  noFill()

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2
  const midY = (mouseY + pmouseY) / 2

  // find the angle of the direction the mouse is moving in
  const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)

  // find which way to flip the arc
  const flip = (frameCount % 2) * PI

  // draw the arc as a half circle 
  arc(midX, midY, distance, distance, angle + flip, angle + PI + flip)
}

function marker() {
	// set the brush style
  noStroke()
  
	// draw a circle at the current mouse point, with diameter of 50 pixels
  circle(mouseX, mouseY, 50)
}
    
    function stars() {
	noStroke()

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2
  const midY = (mouseY + pmouseY) / 2

  // draw a circle at the midpoint, with distance as its diameter
  circle(midX, midY, distance)
}
