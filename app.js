var row1 = document.getElementById("row1");
var row2 = document.getElementById("row1");
var row3 = document.getElementById("row1");


var columns = document.getElementsByClassName("col");
var restart = document.getElementById("restart");
var put = 'O';

var gameOver = false;
var arr = Array.prototype.slice.call( columns );
var p = document.getElementById("show");
var matrix = [];
matrix.push(['N','N','N']);
matrix.push(['N','N','N']);
matrix.push(['N','N','N']);
arr.forEach( function(col) {
	col.addEventListener('click', function(e) {
		if(e.target.innerHTML === '' && !gameOver) {
			
			var col = e.target.classList.value.split(' ')[1];
			var row = e.target.parentElement.id
			e.target.innerHTML = put;
			row = parseInt(row);
			col = parseInt(col);
			//console.log(matrix);

			matrix[row][col] = put;
			var winner = checkWin(matrix);
			if(winner !== 'N'){
				console.log("The Winner is: ", winner);
				p.innerHTML = "The Winner is: " + winner;
				gameOver = true;
				
			}
			if(put === 'O'){
				put = 'X';
			} else {
				put = 'O';
			}
		}
		
	});
});

restart.addEventListener('click', function() {
	arr.forEach(function(col) {
		col.innerHTML = '';
	});
	for(var i = 0; i<arr.length; i++){
		for(var j = 0; j<arr.length; j++){
			arr[i][j] = 'N';
		}
	}
})

var checkWin = function(arr) {
	//check row
	var countX = 0;
	var countO = 0;
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[0].length; j++){
			if(arr[i][j] === 'X') {
				countX ++;
			}
			if(arr[i][j] === 'O'){
				countO ++;
			}
		}
		if(countX === 3) {
			return 'X';
		}else if(countO === 3) {
			return 'O';
		}else {
			countX = 0;
			countO = 0;
		}

	}
	//check col


	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			if(arr[j][i] === 'X') {
				countX ++;
			}
			if(arr[j][i] === 'O'){
				countO ++;
			}
		}
		if(countX === 3) {
			return 'X';
		}else if(countO === 3) {
			return 'O';
		}else {
			countX = 0;
			countO = 0;
		}

	}

	//check diagonal A
	for(var i = 0; i < arr.length; i++){
		if(arr[i][i] === 'X'){
			countX ++;
		}
		if(arr[i][i] === 'O'){
			countO ++;
		}
		if(countX === 3) {
			return 'X';
		}else if(countO === 3) {
			return 'O';
		}
	}
	countX = 0;
	countO = 0;
	//check diagonal B
	for(var i = 0; i < arr.length; i++){
		if(arr[i][arr.length-i-1] === 'X'){
			countX ++;
		}
		if(arr[i][arr.length-i-1] === 'O'){
			countO ++;
		}
		if(countX === 3) {
			return 'X';
		}else if(countO === 3) {
			return 'O';
		}
	}
	return 'N';
}



