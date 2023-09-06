// Flag tracks which players turn it is
flag = 1;

// Turn tracks how many spaces have been taken up, 0-8
turn = 0;

// Check for wins
victory = false;

// return true if win, else false
function checkForWin(boxes, btns) {
	for (let x of boxes) {
		if (x === '') return false;
	}
	if (boxes[0] === boxes[1] && boxes[1] === boxes [2]) {
		victory = true;
		if (flag === 0) {
			document.getElementById('print').innerHTML = "Player X won";
		} else {
			document.getElementById('print').innerHTML = "Player O won";
		}
		btns[0].style.color = "red";
		btns[1].style.color = "red";
		btns[2].style.color = "red";
	}
	return victory;
}

function main() {
	if (turn >= 8) {
		//Tie
		document.getElementById('print').innerHTML = "Match Tie";
	} else {
		turn++;
		var b = [];
		var btn = [];
		b[0] = document.getElementById('b1').value;
		b[1] = document.getElementById('b2').value;
		b[2] = document.getElementById('b3').value;
		b[3] = document.getElementById('b4').value;
		b[4] = document.getElementById('b5').value;
		b[5] = document.getElementById('b6').value;
		b[6] = document.getElementById('b7').value;
		b[7] = document.getElementById('b8').value;
		b[8] = document.getElementById('b9').value;

		btn.push(document.getElementById("b1"));
		btn.push(document.getElementById("b2"));
		btn.push(document.getElementById("b3"));
		btn.push(document.getElementById("b4"));
		btn.push(document.getElementById("b5"));
		btn.push(document.getElementById("b6"));
		btn.push(document.getElementById("b7"));
		btn.push(document.getElementById("b8"));
		btn.push(document.getElementById("b9"));


		if (!victory) {
			checkForWin([b[0], b[1], b[2]], [btn[0], btn[1], btn[2]]);
		}
		if (!victory) {
			checkForWin([b[3], b[4], b[5]], [btn[3], btn[4], btn[5]]);
		}
		if (!victory) {
			checkForWin([b[6], b[7], b[8]], [btn[6], btn[7], btn[8]]);
		}
		if (!victory) {
			checkForWin([b[0], b[3], b[6]], [btn[0], btn[3], btn[6]]);
		}
		if (!victory) {
			checkForWin([b[1], b[4], b[7]], [btn[1], btn[4], btn[7]]);
		}
		if (!victory) {
			checkForWin([b[2], b[5], b[8]], [btn[2], btn[5], btn[8]]);
		}
		if (!victory) {
			checkForWin([b[0], b[4], b[8]], [btn[0], btn[4], btn[8]]);
		}
		if (!victory) {
			checkForWin([b[2], b[4], b[6]], [btn[2], btn[4], btn[6]]);
		}
		if (victory) {
			for (let x of btn) {
				x.disabled = true;
			}
		}

		if (!victory) {
			// Here, Printing Result
			if (flag === 1) {
				document.getElementById('print')
					.innerHTML = "Player X Turn";
			}
			else {
				document.getElementById('print')
					.innerHTML = "Player 0 Turn";
			}
		}
	}
}

// Function to reset game
function resetBoard() {
	location.reload();
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';

	victory = false;
	turn = 0;
	b = [];
	btn = [];
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
