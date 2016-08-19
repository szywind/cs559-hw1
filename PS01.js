/**
 * Created by shenzhenyuan on 1/31/16.
 */

window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

	// add the svg image of the USA map to the canvas
	//context.beginPath();
	var img = new Image();
	img.src = "map_usa.svg";
	img.onload = function(){
		context.drawImage(img, 0, 0);

		// add the position of Madison
		context.arc(590, 180, 5, 0, 2*Math.PI)
		context.strokeStyle = "#800";
		context.fillStyle="#EE0";
		context.fill();
		context.stroke();
	}


};