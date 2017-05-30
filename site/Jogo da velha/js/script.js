var contadorJogadas = 0;
var turno = 1;
var O_val = "O";
var X_val = "X";
var EMPTY_val=" ";

function rodada(sqr){
	if (sqr.value == EMPTY_val) {
		if (turno==1) {
			sqr.value= X_val;
			sqr.style.backgroundColor = "blue";
		} else{
			sqr.value= O_val;
			sqr.style.backgroundColor = "black";
		}

		turno*=-1;
		validaJogada();
	}
}


function validaJogada(){
	contadorJogadas=0;
	
	var sqr = new Array();
	for(var a=0; a<9;a++){sqr[a] = document.getElementsByClassName("campo")[a].value;}

	var valorTurno;
	if (turno == -1) {
		valorTurno = X_val;
	} else if(turno == +1){
		valorTurno = O_val;
	}

	if((sqr[0] == valorTurno && sqr[1] == valorTurno && sqr[2] == valorTurno) ||
		(sqr[3] == valorTurno && sqr[4] == valorTurno && sqr[5] == valorTurno) ||
		(sqr[6] == valorTurno && sqr[7] == valorTurno && sqr[8] == valorTurno) ||
		(sqr[0] == valorTurno && sqr[3] == valorTurno && sqr[6] == valorTurno) ||
		(sqr[1] == valorTurno && sqr[4] == valorTurno && sqr[7] == valorTurno) ||
		(sqr[2] == valorTurno && sqr[5] == valorTurno && sqr[8] == valorTurno) ||
		(sqr[0] == valorTurno && sqr[4] == valorTurno && sqr[8] == valorTurno) ||
		(sqr[2] == valorTurno && sqr[4] == valorTurno && sqr[6] == valorTurno) ){
		alert("jogador " + valorTurno +" ganhou");
		reset();
	} else {
		for(var b=0;b<9;b++){
			if (sqr[b] != EMPTY_val) {
				contadorJogadas++;
			}
			
		}

		if(contadorJogadas >= 9){
			alert("Velha");
			reset();
		}
	}

	
}


function reset(){
	for(var a=0;a<9;a++){
		document.getElementsByClassName("campo")[a].value = EMPTY_val;
		document.getElementsByClassName("campo")[a].style.backgroundColor = "white";
	}

	turno = 1;
	contadorJogadas = 0;
}