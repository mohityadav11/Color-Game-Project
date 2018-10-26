var numSquares = 6;
var colors = generateRandomcolors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		if(this.textContent ==="Easy"){
			numSquares=3;
		} else {
			numSquares = 6;
		}
		reset();
	});
}

function reset(){
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = " ";
	colors = generateRandomcolors(numSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0 ; i< squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});


colorDisplay.textContent = pickedColor;

for(var i=0;i < squares.length;i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clikedColor = this.style.backgroundColor;

		if(clikedColor===pickedColor){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clikedColor);
		h1.style.backgroundColor = clikedColor;
			}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}

function changeColors(colors){
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];  
}

function generateRandomcolors(num){

	var arr = []


	for(var i=0; i < num; i++){
		arr.push(randomColors());

	}
	return arr;
}

function randomColors() {
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}