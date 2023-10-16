// Flag tracks which players turn it is
let flag = 1;

// Turn tracks how many spaces have been taken up, 0-8
let turn = 0;

// Check for wins
let victory = false;

// Const for valid win combinitaions
const validWins =  [[0, 1, 2], [3, 4, 5], 
					[6, 7, 8], [0, 3, 6], 
					[1, 4, 7], [2, 5, 8], 
					[0, 4, 8], [2, 4, 6]];

// return true if win, else false
function checkForWin(boxes, btns) {
	// Ensure that all boxes atleast have an X or O. 
	for (let x of boxes) {
		if (x === '') return false;
	}
	// Check that all boxes in line are the same value (all x or all o)
	if (boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
		victory = true;
		if (flag === 0) {
			document.getElementById('print').innerHTML = "Player X won";
		} else {
			document.getElementById('print').innerHTML = "Player O won";
		}
		// Mark the winning boxes in red
		btns[0].style.color = "red";
		btns[1].style.color = "red";
		btns[2].style.color = "red";
	}
	return victory;
}

function main() {
	var b = [];
	var btn = [];
	for (let i = 1; i <= 9; i++) {
		b.push(document.getElementById('b' + i.toString()).value);
		btn.push(document.getElementById('b' + i.toString()));
	}

	for (let x of validWins) {
		checkForWin([b[x[0]], b[x[1]], b[x[2]]], [btn[x[0]], btn[x[1]], btn[x[2]]]);
	}

	if (victory)  {
		disableBoard(btn);
	} else {
		if (turn >= 8) {
			//Tie if all boxes are full
			document.getElementById('print').innerHTML = "Match Tie";
		}
		// Here, Printing Result
		else if (flag === 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
	turn++;
	updatePlayer();
}


// Function to reset game
function resetBoard() {
	location.reload();
}

// Function to disable the board
function disableBoard(btn) {
	for (let x of btn) {
		x.disabled = true;
	}
}

// Mark space function
function markSpace(space) {
	if (flag == 1) {
		document.getElementById(space).value = "X";
		flag = 0;
	}
	else {
		document.getElementById(space).value = "0";
		flag = 1;
	}
	document.getElementById(space).disabled = true;
}