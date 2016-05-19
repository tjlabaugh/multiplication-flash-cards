var problem 	= document.querySelector('.problem');
var genBttn 	= document.querySelector('#gen-problem');
var submitBttn	= document.querySelector('#submit');
var userInput	= document.querySelector('.userInput');
var message		= document.querySelector('.message');
var overlay		= document.querySelector('.overlay');
var streak 		= document.querySelector('.streak');
var notecard	= document.querySelector('.notecard');
var randNum1 	= 0;
var randNum2 	= 0;
var streakCount = 0;

// function will generate multiplication problem for user to solve.
function generate() {
	randNum1 = Math.floor(Math.random() * 10 + 1);
	randNum2 = Math.floor(Math.random() * 10 + 1);

	problem.textContent = randNum1 + " x " + randNum2;

	// Puts focus on text input so user doesn't have to click to focus each time
	userInput.focus();

	// Hides overlay message
	overlay.style.display = 'none';

	// Addes the animation classes to give card flipping over effect
	var notecardClassVal = notecard.className;
	notecardClassVal += ' flip';
	notecard.className = notecardClassVal;
	var problemClassVal = problem.className;
	problemClassVal += ' showtext';
	problem.className = problemClassVal;
};

// function will evaluate user's answer.
function evaluate() {
	var output;

	// If user answers correctly message "correct" will appear and streak counter will increase 
	if (userInput.value == (randNum1 * randNum2)) {
		output = "Correct!";
		message.style.color = "green";
		streakCount++;
	}
	// If user answers wrong message "wrong" will appear and streak counter will reset
	else {
		output = "Wrong!";
		message.style.color = "red";
		streakCount = 0;
	}

	// Adds the problem, correct answer, and streak counter to message
	output += "<br />" + randNum1 + " x " + randNum2 + " = " + (randNum1 * randNum2);
	streak.textContent = "Your Streak: " + streakCount;
	message.innerHTML = output;

	// Resets input text box
	userInput.value = '';

	// Resets notecard and problem classes
	notecard.className = 'notecard';
	problem.className = 'problem';

	// Takes focus off input box, displays overlay, and sets focus to "generate problem button"
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

