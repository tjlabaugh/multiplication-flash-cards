var problem 	= document.querySelector('.problem');
var genBttn 	= document.querySelector('#gen-problem');
var submitBttn	= document.querySelector('#submit');
var userInput	= document.querySelector('.userInput');
var message		= document.querySelector('.message');
var overlay		= document.querySelector('.overlay');
var streak 		= document.querySelector('.streak');
var randNum1 	= 0;
var randNum2 	= 0;
var streakCount = 0;

// function will generate multiplication problem for user to solve.
function generate() {
	randNum1 = Math.floor(Math.random() * 10 + 1);
	randNum2 = Math.floor(Math.random() * 10 + 1);

	problem.textContent = randNum1 + " x " + randNum2;
	userInput.focus();
	overlay.style.display = 'none';
};

// function will evaluate user's answer.
function evaluate() {
	var output;

	if (userInput.value == (randNum1 * randNum2)) {
		output = "Correct!";
		message.style.color = "green";
		streakCount++;
	}
	else {
		output = "Wrong!";
		message.style.color = "red";
		streakCount = 0;
	}

	output += "<br />" + randNum1 + " x " + randNum2 + " = " + (randNum1 * randNum2);
	streak.textContent = "Your Streak: " + streakCount;
	message.innerHTML = output;
	userInput.value = '';
	userInput.blur();
	overlay.style.display = 'block';
	genBttn.focus();
};

// Event listeners if the user clicks 'Generate Problem' or hits enter
genBttn.addEventListener('click', function(e) {
	generate();
}, false);

genBttn.addEventListener('keypress', function(e) {
	if (e.keyCode === 13) {
		generate();
	}
}, false);

// Event listeners if the user clicks 'submit' button or hits enter while in the input box.
submitBttn.addEventListener('click', function(e) {
	evaluate();
}, false);

userInput.addEventListener('keypress', function(e) {
	if (e.keyCode === 13) {
		evaluate();
	}
}, false);

