var windowWidth=$(window).width();
console.log(windowWidth);
var halfWindowWidth= windowWidth/2;


$(".blockOne").css("left", 0);
$(".blockTwo").css("left", windowWidth-50);
console.log("position should have happened");


var bounceBack= false;
var bounceForward=false;




function getRandomColor(){

	var letters= '0123456789ABCDEF';
	var color= '#';
	for(var i=0;i<6; i++){

		color+= letters[Math.floor(Math.random()*16)];
	}
	return color;
}
//we chaged the file








var black=false;
function changeSquares(){
	if(black===false){
		$(".block").css("background-color", getRandomColor());
		black=true;

	}else{
		$(".block").css("background-color",getRandomColor());
		black=false;
	}
}



function bounceLeftRight(){
	if(bounceBack===false){
		$(".blockOne").css("left", windowWidth-50);
		bounceBack=true;
	}	else{
		$(".blockOne").css("left", 0);
		bounceBack=false;

	}


}

function bounceRightLeft(){
	if(bounceForward===false){
		$(".blockTwo").css("left", 0);
		bounceForward=true;
	}	else{
		$(".blockTwo").css("left", windowWidth-50);
		bounceForward=false;

	}


}


setInterval(bounceLeftRight,1000);
setInterval(bounceRightLeft,1000);
setInterval(changeSquares,500);






//$("#blockOne").on("click",function(){
// 	$("#blockOne").css("left", windowWidth);
// 	setTimeout(function(){
// 		$("#blockOne").css("left", 0);
// 	},1000);
// });
