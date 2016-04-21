// setup your IIFE (Immediately Invoked Function Expression)
(function () {

	/* 
	//attempted to create new image elements via JS and append them on to DOM, but it 
	// resulted in 2+ di being displayed upon continuous roll  
var di1 = document.createElement("img");
di1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/120px-Dice-1-b.svg.png";
 
var di2 =  document.createElement("img");
di2.src = "http://dobbelsteen.virtuworld.net/img/2c.gif";
 
var di3 = document.createElement("img");
di3.src = "http://www.serenapowers.com/img/dice3.jpg";
 
var di4 = document.createElement("img");
di4.src = "http://www.clipartbest.com/cliparts/4ib/Rao/4ibRao6ig.gif"
 
var di5 = document.createElement("img");
di5.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/120px-Dice-5-b.svg.png";
 
var di6 = document.createElement("img");
di6.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/200px-Dice-6a.svg.png";
*/

	// target empty image element di1 and di2 via JS DOM access
	var di1 = document.getElementById("di1");
	var di2 = document.getElementById("di2");


	// add click event to roll button
	var button = document.getElementById("button");
	button.onclick = function () {
		// create two math random functions for two different di
		var roll = Math.floor((Math.random() * 6 + 1));
		var roll2 = Math.floor((Math.random() * 6 + 1));

		// display di result via DOM access 
		document.getElementById("result1").innerHTML = "<strong>Di one:</strong> " + roll;
		document.getElementById("result2").innerHTML = "<strong>Di two:</strong> " + roll2;


		// if else scenario for di1 
		if (roll === 1) {
			di1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/120px-Dice-1-b.svg.png");

		}

		else if (roll === 2) {
			di1.setAttribute("src", "http://dobbelsteen.virtuworld.net/img/2c.gif");

		}
		else if (roll === 3) {
			di1.setAttribute("src", "http://www.serenapowers.com/img/dice3.jpg");
		}
		else if (roll === 4) {
			di1.setAttribute("src", "http://www.clipartbest.com/cliparts/4ib/Rao/4ibRao6ig.gif");
		}
		else if (roll === 5) {
			di1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/120px-Dice-5-b.svg.png");

		}
		else if (roll === 6) {
			di1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/200px-Dice-6a.svg.png");
		}



		// if else scenario for di2
		if (roll2 === 1) {
			di2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/120px-Dice-1-b.svg.png");
		}
		else if (roll2 === 2) {
			di2.setAttribute("src", "http://dobbelsteen.virtuworld.net/img/2c.gif");

		}
		else if (roll2 === 3) {
			di2.setAttribute("src", "http://www.serenapowers.com/img/dice3.jpg");
		}
		else if (roll2 === 4) {
			di2.setAttribute("src", "http://www.clipartbest.com/cliparts/4ib/Rao/4ibRao6ig.gif");
		}
		else if (roll2 === 5) {
			di2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/120px-Dice-5-b.svg.png");
		}
		else if (roll2 === 6) {
			di2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/200px-Dice-6a.svg.png");
		}


	};

})();