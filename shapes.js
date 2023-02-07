function Shapes(context, type_shape, x_startpoint, y_startpoint, x_endpoint, y_endpoint, fillColor, strokeColor, penWidth) {
    this.context = context;
    this.type_shape = type_shape;
    this.x_startpoint = x_startpoint;
    this.y_startpoint = y_startpoint;
    this.x_endpoint = x_endpoint;
    this.y_endpoint = y_endpoint;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.penWidth = penWidth;

    this.draw = function() {
        this.context.lineWidth = this.penWidth;
        this.context.lineCap = "round";
        this.context.strokeStyle = this.strokeColor;
        this.context.fillStyle = this.fillColor;
        if(this.type_shape == 1) {
            // context.beginPath();
            this.context.strokeStyle = this.strokeColor;
            this.context.moveTo(this.x_startpoint, this.y_startpoint);
            this.context.lineTo(this.x_endpoint, this.y_endpoint);
            this.context.stroke();
          } else if(this.type_shape == 2) {
            context.beginPath();
            this.context.strokeStyle = this.strokeColor;
            this.context.fillRect(this.x_startpoint, this.y_startpoint, this.x_endpoint-this.x_startpoint, this.y_endpoint-this.y_startpoint);
            this.context.strokeRect(this.x_startpoint, this.y_startpoint, this.x_endpoint-this.x_startpoint, this.y_endpoint-this.y_startpoint);
          } else if(this.type_shape == 3) {
            this.context.beginPath();
            this.context.strokeStyle = this.strokeColor;
            var radius = Math.sqrt(Math.pow(this.x_endpoint-this.x_startpoint, 2) + Math.pow(this.y_endpoint-this.y_startpoint, 2));
            this.context.arc(this.x_startpoint, this.y_startpoint, radius, 0, Math.PI * 2);
            this.context.stroke();
            this.context.fill();
          } else if(this.type_shape == 4) {
            this.context.beginPath();
            this.context.strokeStyle = this.strokeColor;
            this.context.moveTo(this.x_endpoint-((this.x_endpoint-this.x_startpoint)/2), this.y_startpoint);
            this.context.lineTo(this.x_startpoint, this.y_endpoint);
            this.context.lineTo(this.x_endpoint, this.y_endpoint);
            this.context.closePath();
    
            this.context.stroke();
            this.context.fill();
          } else if(this.type_shape == 5) {
            this.context.strokeStyle = 'white';
            this.context.moveTo(this.x_startpoint, this.y_startpoint);
            this.context.lineTo(this.x_endpoint, this.y_endpoint);
            this.context.stroke();
          }
    }
}