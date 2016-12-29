$( document ).ready( function() {

	var bkImage = document.querySelector("#bkImage");
	var imageCtx = bkImage.getContext("2d");
	bkImage.height = 500;
	bkImage.width = 500;

	var imageObj = new Image();
	imageObj.onload = function() {
		imageCtx.drawImage(imageObj, 0, 0);
	};
	imageObj.src = 'images/500x500.png';

	var c = document.querySelector("#canvas");
	var ctx = c.getContext("2d");
	c.height = 500;
	c.width = 500;
    var topText = "";
    var bottomText = "";

    $( "#fileImage" ).change(function(){
    	console.log($( "#fileImage" ))

    	var file    = document.querySelector('input[type=file]').files[0]; //sames as here
		var reader  = new FileReader();

       	reader.onloadend = function () {
       		imageObj = new Image();
			imageObj.onload = function() {
				imageCtx.drawImage(imageObj, 0, 0, 500, 500);
			};
			imageObj.src = reader.result;
       	}

  		if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       	} else {
           imageObj.src = "";
       	}
    });

	$( "#loadBtn" ).click(function(){
		console.log("clique");
	});

	$( "#top-text" ).keyup(function(evt){
		topText = $( "#top-text" ).val();
		ctx.font = "bold 36pt Impact";
		ctx.textAlign = "center";
		redrawTopText(topText);
	});

	$( "#bottom-text" ).keyup(function(evt){
		bottomText = $( "#bottom-text" ).val();
		ctx.font = "bold 36pt Impact";
		ctx.textAlign = "center";
		redrawBottomText(bottomText);
	});

	function redrawTopText(topText, bottomText){
        ctx.clearRect(0,0,c.width,c.height-50);   
        ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.strokeText(topText, c.width/2, 60);
		ctx.fillStyle = "white"
		ctx.fillText(topText, c.width/2, 60);
    }

    function redrawBottomText(bottomText) {
    	ctx.clearRect(0,100,c.width-100,c.height);   
    	ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.strokeText(bottomText, c.width/2, c.height - 20);
		ctx.fillStyle = "white"
		ctx.fillText(bottomText, c.width/2, c.height - 20);

    }

});
