let displayName = document.getElementById("display-name");

let names = ["Gary", "Larry", "Barry", "Carrie", "Bally"];

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
	let firstName = names[getRandomNum(0, names.length)];
	let lastName = names[getRandomNum(0, names.length)];

	displayName.innerHTML = firstName + " " + lastName;
}
