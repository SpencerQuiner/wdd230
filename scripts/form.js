//password confimation

const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const formmsg = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

function checkSame(value1, value2) {
    value1 = pass1.value;
    value2 = pass2.value;
	if (value1 !== value2) {
		formmsg.textContent = "Passwords DO NOT MATCH!";
		formmsg.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		formmsg.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}

//range event listener

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.textContent = `${range.value}`;
}
