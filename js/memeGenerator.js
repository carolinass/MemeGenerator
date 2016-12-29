$( document ).ready( function() {

	var c = document.querySelector("#canvas");
	var ctx = c.getContext("2d");
	c.height = 500;
	c.width = 500;

	var imageObj = new Image();
	imageObj.setAttribute('crossOrigin', 'anonymous');
	imageObj.onload = function() {
		ctx.drawImage(imageObj, 0, 0);
	};
	imageObj.src = 'images/500x500.png';

	
    var topText = "";
    var bottomText = "";

    $( "#fileImage" ).change(function(){

    	var file    = document.querySelector('input[type=file]').files[0]; //sames as here
		var reader  = new FileReader();

       	reader.onloadend = function () {
       		imageObj = new Image();
       		imageObj.setAttribute('crossOrigin', 'anonymous');
			imageObj.onload = function() {
				ctx.drawImage(imageObj, 0, 0, 500, 500);
			};
			imageObj.src = reader.result;
       	}

  		if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       	} else {
           imageObj.src = "";
       	}
    });

	$( "#top-text" ).keyup(function(evt){
		topText = $( "#top-text" ).val();
		redrawMeme(imageObj, topText, bottomText);
	});

	$( "#bottom-text" ).keyup(function(evt){
		bottomText = $( "#bottom-text" ).val();
		redrawMeme(imageObj, topText, bottomText);
	});

    function redrawMeme(image, topLine, bottomLine) {
      // Get Canvas2DContext
      var canvas = document.querySelector('canvas');
      var ctx = canvas.getContext("2d");
      if (image != null && image.src != 'images/500x500.png')
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      
      // Text attributes
      ctx.font = 'bold 36pt Impact';
      ctx.textAlign = 'center';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'white';
      
      if (topLine != null) {
        ctx.fillText(topLine, canvas.width / 2, 60);
        ctx.strokeText(topLine, canvas.width / 2, 60);
      }
      
      if (bottomLine != null) {
        ctx.fillText(bottomLine, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomLine, canvas.width / 2, canvas.height - 20);
      }
    }

    function saveFile() {
    	window.open(document.querySelector('canvas').toDataURL());
    }

    document.querySelector('#btn-save').addEventListener('click', saveFile, false);

});
