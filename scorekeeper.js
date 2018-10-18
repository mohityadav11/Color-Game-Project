var p1Button = document.querySelector("#p1");

var p2Button = document.querySelector("#p2");

var p1score=0;

var p1Display = document.querySelector("#p1Display");

var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input");

var p = document.querySelector("p");

var winningscoreDisplay = document.querySelector("p span");

var p2score=0;

var h1 = document.querySelector("h1");

var gameOver = false;

var winningscore = 5;

var resetButton = document.querySelector("#reset");

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if(p1score==winningscore){
			gameOver=true;
			p1Display.style.color="green";
		}
	p1Display.textContent = p1score;
	}
	
})

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
	if(p2score==winningscore){
		gameOver=true;
		p2Display.style.color="green";
	}
	p2Display.textContent = p2score;

	}
	
})

resetButton.addEventListener("click",function(){

	reset();
})

function reset(){
	p1score=0;
	p1Display.textContent=p1score;
	p2score=0;
	p2Display.textContent=p2score;
	gameOver=false;
	p1Display.style.color="black";
	p2Display.style.color="black";
}

numInput.addEventListener("change",function(){

	winningscore = numInput.value;
	winningscoreDisplay.textContent = numInput.value;
	reset(); 

})