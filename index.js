window.onload = function() {
    var paint_canvas = document.getElementById("paint-canvas");
    paint_canvas.width = paint_canvas.clientWidth;
    paint_canvas.height = paint_canvas.clientHeight;
    
    var context = paint_canvas.getContext("2d");
    var boundings = paint_canvas.getBoundingClientRect();

    var drawShapes = [];

    var isStrokeFill;
    var strokeColor = 'black';
    var fillColor = 'white';

    var penWidth = 3;
    var g_compositeOperation = 'source-over';
    
    var type_shape;

    var isDrawing = false;

    var mouseX = 0;
    var mouseY = 0;
    var x_startpoint;
    var y_startpoint;
    var x_endpoint;
    var y_endpoint;

  // Mouse Down Event
  paint_canvas.addEventListener('mousedown', function(event) {
    setMouseCoordinates(event);
    x_startpoint = mouseX;
    y_startpoint = mouseY;
    isDrawing = true;

    // Start Drawing
    context.beginPath();
    context.lineWidth = penWidth;
    context.lineCap = "round";
    context.strokeStyle = strokeColor;
    context.fillStyle = fillColor;
    // context.globalCompositeOperation=g_compositeOperation;

    if(type_shape == 1) {
        context.moveTo(x_startpoint, y_startpoint);
    }
  });

  // Mouse Move Event
  paint_canvas.addEventListener('mousemove', function(event) {    
    setMouseCoordinates(event);
    x_endpoint = mouseX;
    y_endpoint = mouseY;

    if(isDrawing){
      if(type_shape == 1) {
        context.lineTo(x_endpoint, y_endpoint);
        context.stroke();
        drawShapes.push(new Shapes(context, type_shape, x_startpoint, y_startpoint, x_endpoint, y_endpoint, fillColor, strokeColor, penWidth));
        x_startpoint = x_endpoint;
        y_startpoint = y_endpoint;
      } else if(type_shape == 2) {
        clearPaint();
        redraw();
        context.fillRect(x_startpoint, y_startpoint, x_endpoint-x_startpoint, y_endpoint-y_startpoint);
        context.strokeRect(x_startpoint, y_startpoint, x_endpoint-x_startpoint, y_endpoint-y_startpoint);
      } else if(type_shape == 3) {
        clearPaint();
        redraw();
        var radius = Math.sqrt(Math.pow(x_endpoint-x_startpoint, 2) + Math.pow(y_endpoint-y_startpoint, 2));
        context.beginPath();
        context.arc(x_startpoint, y_startpoint, radius, 0, Math.PI * 2);
        context.closePath();

        context.stroke();
        context.fill();
      } else if(type_shape == 4) {
        clearPaint();
        redraw();
        context.beginPath();
        context.moveTo(x_endpoint-((x_endpoint-x_startpoint)/2), y_startpoint);
        context.lineTo(x_startpoint, y_endpoint);
        context.lineTo(x_endpoint, y_endpoint);
        context.closePath();

        context.stroke();
        context.fill();
      } else if(type_shape == 5) {
        context.strokeStyle = 'white';
        context.lineTo(x_endpoint, y_endpoint);
        context.stroke();
        drawShapes.push(new Shapes(context, type_shape, x_startpoint, y_startpoint, x_endpoint, y_endpoint, fillColor, 'white', penWidth));
        x_startpoint = x_endpoint;
        y_startpoint = y_endpoint;
      }
    }
  });

  // Mouse Up Event
  paint_canvas.addEventListener('mouseup', function(event) {
    setMouseCoordinates(event);
    x_endpoint = mouseX;
    y_endpoint = mouseY;

    if(type_shape==2 || type_shape == 3 || type_shape == 4) {
      drawShapes.push(new Shapes(context, type_shape, x_startpoint, y_startpoint, x_endpoint, y_endpoint, fillColor, strokeColor, penWidth));
    }
    
    isDrawing = false;
  });

  // Handle Mouse Coordinates
  function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
  }

  function redraw() {
    drawShapes.forEach(function(item){
      item.draw();
    });

    context.lineWidth = penWidth;
    context.lineCap = "round";
    context.strokeStyle = strokeColor;
    context.fillStyle = fillColor;
  }

  document.getElementById('clearButton').addEventListener('click', function(){
    clearPaint();
    drawShapes = [];
  });

  function clearPaint() {
    context.clearRect(0, 0, paint_canvas.width, paint_canvas.height);
  }

  document.getElementById('saveImageButton').addEventListener('click', function(){
    var imageName = prompt('Please enter image name');
    var canvasDataURL = paint_canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = imageName || 'drawing';
    a.click();
  });

    // set shape type

    function setActiveShapeStyle(target) {
        var btn_shape = document.getElementsByClassName('type_shape');
        Array.prototype.forEach.call(btn_shape, function(element){
            element.classList.remove('active_shape');
        });
        target.classList.add('active_shape');
    }

    document.getElementById('tool-pencil').addEventListener('click', function(event){
        setActiveShapeStyle(event.target);
        type_shape = 1;
    });

    document.getElementById('tool-rectangle').addEventListener('click', function(event){
        setActiveShapeStyle(event.target);
        type_shape = 2;
    });

    document.getElementById('tool-circle').addEventListener('click', function(event){
        setActiveShapeStyle(event.target);
        type_shape = 3;
    });

    document.getElementById('tool-triangle').addEventListener('click', function(event){
        setActiveShapeStyle(event.target);
        type_shape = 4;
    });

    document.getElementById('tool-eraser').addEventListener('click', function(event){
      setActiveShapeStyle(event.target);
      // g_compositeOperation = g_compositeOperation=='source-over'?'destination-out':'source-over';
      type_shape = 5;
    });

    document.getElementById('tool-rectangle').click();

    document.getElementById('stroke').addEventListener('click', function(event){
        isStrokeFill = 1;
        setStyleActive(event.target);
    });

    document.getElementById('fill').addEventListener('click', function(event){
        isStrokeFill = 2;
        setStyleActive(event.target);
    });

    function setStyleActive(target) {
        Array.prototype.forEach.call(document.getElementsByClassName('btn_fill_stroke'), function(element){
            element.classList.remove('active');
        });
        target.classList.add('active');
    }

    document.getElementById('stroke').click();

    var colors = document.querySelectorAll('.colors button[type=button]');
    Array.prototype.forEach.call(colors, function(item){
        item.addEventListener('click', function(event){
            if(isStrokeFill == 1) {
                strokeColor = event.target.value;
                document.getElementById('stroke').style.backgroundColor = event.target.value;
            } else if(isStrokeFill == 2) {
                fillColor = event.target.value;
                document.getElementById('fill').style.backgroundColor = event.target.value;
            }
        });
    });

    document.getElementById('input_color_picker').addEventListener('input', function(event){
        if(isStrokeFill == 1) {
            strokeColor = event.target.value;
            document.getElementById('stroke').style.backgroundColor = event.target.value;
        } else if(isStrokeFill == 2) {
            fillColor = event.target.value;
            document.getElementById('fill').style.backgroundColor = event.target.value;
        }
    });
}
