var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/book-flowers.jpg') {
		myImage.setAttribute ('src', 'images/book-world.jpg');
	} else {
		myImage.setAttribute ('src', 'images/book-flowers.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to book club ' + myName + "!";
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome back to book club ' + storedName + "!";
}

myButton.onclick = function() {
	setUserName();
}