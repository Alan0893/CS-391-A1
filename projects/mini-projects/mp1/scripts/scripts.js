function getVal() {
	let first = document.getElementById("first-number").value;
	let sec = document.getElementById("second-number").value;

	let num1 = Number(first);
	let num2 = Number(sec);
	return {num1, num2}
}

function addition() {
	let {num1, num2} = getVal();
	document.getElementById("output").innerHTML = "Output: " + (num1 + num2)

	if ((num1 + num2) < 0) {
		document.getElementById("output").style.color = "red"
	} else {
		document.getElementById("output").style.color = "white"
	}
}

function subtraction() {
	let {num1, num2} = getVal();
	document.getElementById("output").innerHTML = "Output: " + (num1 - num2)

	if ((num1 - num2) < 0) {
		document.getElementById("output").style.color = "red"
	} else {
		document.getElementById("output").style.color = "white"
	}
}

function multiplication () {
	let {num1, num2} = getVal();
	document.getElementById("output").innerHTML = "Output: " + (num1 * num2)

	if ((num1 * num2) < 0) {
		document.getElementById("output").style.color = "red"
	} else {
		document.getElementById("output").style.color = "white"
	}
}

function division() {
	let {num1, num2} = getVal();
	document.getElementById("output").innerHTML = "Output: " + (num1 / num2)

	if ((num1 / num2) < 0) {
		document.getElementById("output").style.color = "red"
	} else {
		document.getElementById("output").style.color = "white"
	}
}

function power() {
	let {num1, num2} = getVal();
	let output = num1;
	for (let i = 1; i < num2; i++) {
		output *= num1;
	}
	document.getElementById("output").innerHTML = "Output: " + output

	if (output < 0) {
		document.getElementById("output").style.color = "red"
	} else {
		document.getElementById("output").style.color = "white"
	}
}

function empty() {
	document.getElementById("first-number").value = "";
	document.getElementById("second-number").value = "";
	document.getElementById("output").innerHTML = ""
}