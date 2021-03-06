var btn = document.getElementById("btn")
var stop = false
var browserWidth = window.innerWidth || document.documentElement.clientWidth;
var browserHeight = window.innerHeight || document.documentElement.clientHeight;
var buttonWidth = btn.offsetWidth;
var buttonHeight = btn.offsetHeight;
var shifted = false;

btn.onclick = function() {
	if(stop) {
		startGame()
	}
	else {
		endGame()
	}
}
 
function move() {
	btn.style.left = Math.floor(Math.random()*(browserWidth-buttonWidth)) + "px";
	btn.style.top = Math.floor(Math.random()*(browserHeight-buttonHeight)) + "px";
}

document.onkeydown = function(ev) {
	if(ev.shiftKey)
		shifted = true
}

document.onkeyup = function(ev) {
	if(ev.shiftKey)
		shifted = false
}

btn.onmouseover = function(ev) {
	if(!shifted && !stop)
		move()
}

function endGame() {
	btn.innerHTML = "Play Again"
	stop = true
	shifted = false
	document.getElementById("won").style.display = "block"
}

function startGame() {
	btn.innerHTML = "Click Me"
	stop = false
	document.getElementById("won").style.display = "none"
}

