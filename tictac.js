function myfunct(){
		var a1, a2, a3, a4, a5, a6, a7, a8, a9;
		a1 = document.getElementById("a1").value;
		a2 = document.getElementById("a2").value;
		a3 = document.getElementById("a3").value;
		a4 = document.getElementById("a4").value;
		a5 = document.getElementById("a5").value;
		a6 = document.getElementById("a6").value;
		a7 = document.getElementById("a7").value;
		a8 = document.getElementById("a8").value;
		a9 = document.getElementById("a9").value;
	
		// Checking if Player X won or not and after
		// that disabled all the other fields
		if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
			a2 == 'X') && (a3 == 'x' || a3 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a4").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player X won');
		}
		else if ((a1 == 'x' || a1 == 'X') && (a4 == 'x' ||
			a4 == 'X') && (a7 == 'x' || a7 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
	
			window.alert('Player X won');
		}
		else if ((a7 == 'x' || a7 == 'X') && (a8 == 'x' ||
			a8 == 'X') && (a9 == 'x' || a9 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a6").disabled = true;
			window.alert('Player X won');
		}
		else if ((a3 == 'x' || a3 == 'X') && (a6 == 'x' ||
			a6 == 'X') && (a9 == 'x' || a9 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			window.alert('Player X won');
		}
		else if ((a1 == 'x' || a1 == 'X') && (a5 == 'x' ||
			a5 == 'X') && (a9 == 'x' || a9 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			window.alert('Player X won');
		}
		else if ((a3 == 'x' || a3 == 'X') && (a5 == 'x' ||
			a5 == 'X') && (a7 == 'x' || a7 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player X won');
		}
		else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
			b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player X won');
		}
		else if ((a4 == 'x' || a4 == 'X') && (a5 == 'x' ||
			a5 == 'X') && (a6 == 'x' || a6 == 'X')) {
			document.getElementById('print')
				.innerHTML = "Player X won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player X won');
		}
	
		// Checking of Player X finish
		// Checking for Player 0 starts, Is player 0 won or
		// not and after that disabled all the other fields
		else if ((a1 == '0' || a1 == '0') && (a2 == '0' ||
			a2 == '0') && (a3 == '0' || a3 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a4").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a1 == '0' || a1 == '0') && (a4 == '0' ||
			a4 == '0') && (a7 == '0' || a7 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a7 == '0' || a7 == '0') && (a8 == '0' ||
			a8 == '0') && (a9 == '0' || a9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a6").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a3 == '0' || a3 == '0') && (a6 == '0' ||
			a6 == '0') && (a9 == '0' || a9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a5").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a1 == '0' || a1 == '0') && (a5 == '0' ||
			a5 == '0') && (a9 == '0' || a9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a3 == '0' || a3 == '0') && (a5 == '0' ||
			a5 == '0') && (a7 == '0' || a7 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a2 == '0' || a2 == '0') && (a5 == '0' ||
			a5 == '0') && (a8 == '0' || a8 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a4").disabled = true;
			document.getElementById("a6").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player 0 won');
		}
		else if ((a4 == '0' || a4 == '0') && (a5 == '0' ||
			a5 == '0') && (a6 == '0' ||a6 == '0')) {
			document.getElementById('print')
				.innerHTML = "Player 0 won";
			document.getElementById("a1").disabled = true;
			document.getElementById("a2").disabled = true;
			document.getElementById("a3").disabled = true;
			document.getElementById("a7").disabled = true;
			document.getElementById("a8").disabled = true;
			document.getElementById("a9").disabled = true;
			window.alert('Player 0 won');
		}
	
		// Checking of Player 0 finish
		// Here, Checking about Tie
		else if ((a1 == 'X' || a1 == '0') && (a2 == 'X'
			|| a2 == '0') && (a3 == 'X' || a3 == '0') &&
			(a4 == 'X' || a4 == '0') && (a5 == 'X' ||
			a5 == '0') && (a6 == 'X' || a6 == '0') &&
			(a7 == 'X' || a7 == '0') && (a8 == 'X' ||
			a8 == '0') && (a9 == 'X' || a9 == '0')) {
				document.getElementById('print')
					.innerHTML = "Match Tie";
				window.alert('Match Tie');
		}
		else {
	
			// Here, Printing Result
			if (flag2 == 1) {
				document.getElementById('print')
					.innerHTML = "Player X Turn";
			}
			else {
				document.getElementById('print')
					.innerHTML = "Player 0 Turn";
			}
		}
	}

function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}



function myfunct2(){
    var d1, d2, d3, d4, d5, d6, d7, d8, d9;
    d1 = document.getElementById("d1").value;
    d2 = document.getElementById("d2").value;
    d3 = document.getElementById("d3").value;
    d4 = document.getElementById("d4").value;
    d5 = document.getElementById("d5").value;
    d6 = document.getElementById("d6").value;
    d7 = document.getElementById("d7").value;
    d8 = document.getElementById("d8").value;
    d9 = document.getElementById("d9").value;

    // Checking if Player X won or not and after
    // that disabled all the other fields
    if ((d1 == 'x' || d1 == 'X') && (d2 == 'x' ||
        d2 == 'X') && (d3 == 'x' || d3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d4").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player X won');
    }
    else if ((d1 == 'x' || d1 == 'X') && (d4 == 'x' ||
        d4 == 'X') && (d7 == 'x' || d7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;

        window.alert('Player X won');
    }
    else if ((d7 == 'x' || d7 == 'X') && (d8 == 'x' ||
        d8 == 'X') && (d9 == 'x' || d9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d6").disabled = true;
        window.alert('Player X won');
    }
    else if ((d3 == 'x' || d3 == 'X') && (d6 == 'x' ||
        d6 == 'X') && (d9 == 'x' || d9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        window.alert('Player X won');
    }
    else if ((d1 == 'x' || d1 == 'X') && (d5 == 'x' ||
        d5 == 'X') && (d9 == 'x' || d9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        window.alert('Player X won');
    }
    else if ((d3 == 'x' || d3 == 'X') && (d5 == 'x' ||
        d5 == 'X') && (d7 == 'x' || d7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player X won');
    }
    else if ((d4 == 'x' || d4 == 'X') && (d5 == 'x' ||
        d5 == 'X') && (d6 == 'x' || d6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player X won');
    }

    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((d1 == '0' || d1 == '0') && (d2 == '0' ||
        d2 == '0') && (d3 == '0' || d3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d4").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d1 == '0' || d1 == '0') && (d4 == '0' ||
        d4 == '0') && (d7 == '0' || d7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d7 == '0' || d7 == '0') && (d8 == '0' ||
        d8 == '0') && (d9 == '0' || d9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d3 == '0' || d3 == '0') && (d6 == '0' ||
        d6 == '0') && (d9 == '0' || d9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d5").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d1 == '0' || d1 == '0') && (d5 == '0' ||
        d5 == '0') && (d9 == '0' || d9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d3 == '0' || d3 == '0') && (d5 == '0' ||
        d5 == '0') && (d7 == '0' || d7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d2 == '0' || d2 == '0') && (d5 == '0' ||
        d5 == '0') && (d8 == '0' || d8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d4").disabled = true;
        document.getElementById("d6").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((d4 == '0' || d4 == '0') && (d5 == '0' ||
        d5 == '0') && (d6 == '0' ||d6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("d1").disabled = true;
        document.getElementById("d2").disabled = true;
        document.getElementById("d3").disabled = true;
        document.getElementById("d7").disabled = true;
        document.getElementById("d8").disabled = true;
        document.getElementById("d9").disabled = true;
        window.alert('Player 0 won');
    }

    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((d1 == 'X' || d1 == '0') && (d2 == 'X'
        || d2 == '0') && (d3 == 'X' || d3 == '0') &&
        (d4 == 'X' || d4 == '0') && (d5 == 'X' ||
        d5 == '0') && (d6 == 'X' || d6 == '0') &&
        (d7 == 'X' || d7 == '0') && (d8 == 'X' ||
        d8 == '0') && (d9 == 'X' || d9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {

        // Here, Printing Result
        if (flag2 == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}


// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
flag2= 1;
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

function myfunct_3() {
	if (flag2 == 1) {
		document.getElementById("a1").value = "X";
		document.getElementById("a1").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a1").value = "0";
		document.getElementById("a1").disabled = true;
		flag2 = 1;
	}
}

function myfunct_4() {
	if (flag2 == 1) {
		document.getElementById("a2").value = "X";
		document.getElementById("a2").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a2").value = "0";
		document.getElementById("a2").disabled = true;
		flag2 = 1;
	}
}

function myfunct_5() {
	if (flag2 == 1) {
		document.getElementById("a3").value = "X";
		document.getElementById("a3").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a3").value = "0";
		document.getElementById("a3").disabled = true;
		flag2 = 1;
	}
}

function myfunct_6() {
	if (flag2 == 1) {
		document.getElementById("a4").value = "X";
		document.getElementById("a4").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a4").value = "0";
		document.getElementById("a4").disabled = true;
		flag2 = 1;
	}
}

function myfunct_7() {
	if (flag2 == 1) {
		document.getElementById("a5").value = "X";
		document.getElementById("a5").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a5").value = "0";
		document.getElementById("a5").disabled = true;
		flag2 = 1;
	}
}

function myfunct_8() {
	if (flag2 == 1) {
		document.getElementById("a6").value = "X";
		document.getElementById("a6").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a6").value = "0";
		document.getElementById("a6").disabled = true;
		flag2 = 1;
	}
}

function myfunct_9() {
	if (flag2 == 1) {
		document.getElementById("a7").value = "X";
		document.getElementById("a7").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a7").value = "0";
		document.getElementById("a7").disabled = true;
		flag2 = 1;
	}
}

function myfunct_10() {
	if (flag2 == 1) {
		document.getElementById("a8").value = "X";
		document.getElementById("a8").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a8").value = "0";
		document.getElementById("a8").disabled = true;
		flag2 = 1;
	}
}

function myfunct_11() {
	if (flag2 == 1) {
		document.getElementById("a9").value = "X";
		document.getElementById("a9").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("a9").value = "0";
		document.getElementById("a9").disabled = true;
		flag2 = 1;
	}
}
function myfunct2_3() {
	if (flag2 == 1) {
		document.getElementById("d1").value = "X";
		document.getElementById("d1").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d1").value = "0";
		document.getElementById("d1").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_4() {
	if (flag2 == 1) {
		document.getElementById("d2").value = "X";
		document.getElementById("d2").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d2").value = "0";
		document.getElementById("d2").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_5() {
	if (flag2 == 1) {
		document.getElementById("d3").value = "X";
		document.getElementById("d3").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d3").value = "0";
		document.getElementById("d3").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_6() {
	if (flag2 == 1) {
		document.getElementById("d4").value = "X";
		document.getElementById("d4").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d4").value = "0";
		document.getElementById("d4").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_7() {
	if (flag2 == 1) {
		document.getElementById("d5").value = "X";
		document.getElementById("d5").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d5").value = "0";
		document.getElementById("d5").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_8() {
	if (flag2 == 1) {
		document.getElementById("d6").value = "X";
		document.getElementById("d6").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d6").value = "0";
		document.getElementById("d6").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_9() {
	if (flag2 == 1) {
		document.getElementById("d7").value = "X";
		document.getElementById("d7").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d7").value = "0";
		document.getElementById("d7").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_10() {
	if (flag2 == 1) {
		document.getElementById("d8").value = "X";
		document.getElementById("d8").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d8").value = "0";
		document.getElementById("d8").disabled = true;
		flag2 = 1;
	}
}

function myfunct2_11() {
	if (flag2 == 1) {
		document.getElementById("d9").value = "X";
		document.getElementById("d9").disabled = true;
		flag2 = 0;
	}
	else {
		document.getElementById("d9").value = "0";
		document.getElementById("d9").disabled = true;
		flag2 = 1;
	}
}


