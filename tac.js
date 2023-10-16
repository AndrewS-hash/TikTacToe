// JS that allows for the switching of first player to move

function updatePlayer() {
	if (turn == 0) {
		if (flag == 1) flag = 0;
		else flag = 1;
	} else {
		document.getElementById("toggle").click();
	}

}