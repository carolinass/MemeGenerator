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

	$( "#loadBtn" ).click(function(){
		console.log("clique");
	});

	$( "#top-text" ).keyup(function(evt){
		topText = $( "#top-text" ).val();
		ctx.font = "36pt Impact";
		ctx.textAlign = "center";
		redrawTexts(topText);
	});

	function redrawTexts(topText){
        ctx.clearRect(0,0,c.width,c.height);   
        ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.strokeText(topText, c.width/2, 60);
		ctx.fillStyle = "white"
		ctx.fillText(topText, c.width/2, 60);
    }

});
