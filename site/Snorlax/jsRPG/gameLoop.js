// Criando Canvas
var canvas = document.createElement("canvas");
//Definindo um contexto em 2D
var ctx = canvas.getContext("2d");

//Largura e Altura do canvas
canvas.width = 960;
canvas.height = 625;
//Canvas é filho do body(html), ou seja, sera criado dentro da tag body.
document.body.appendChild(canvas);

//Background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
	bgReady = true;
};
bgImage.src="./imageRPG/fundo.jpg";

//Jogador
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
	heroReady = true;
};
heroImage.src="./imageRPG/hero.png";

//Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
	monsterReady= true;
};
monsterImage.src="./imageRPG/monstro.png";

// Segundo cenario

//var backgroundReady = false;
//var backgroundImage = "novo endereço";
//backgroundImage.src.onload = function(){
//	backgroundReady= true;
//};
//backgroundImage.src="./imageRPG/fundo2.jpg";

//Objetos do jogo 
var hero ={
	speed: 256
};
var monster ={};
//Quantidadede monstros capturados
var monsterCought = 0;
//Controlando pelo teclado
var keysDown = {};

// Manipulador de evento do teclado, verifica o que esta acontecendo com o teclado.

addEventListener("keydown",function (e){
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup",function (e){
	delete keysDown[e.keyCode];
}, false);
//Resetando o jogo
var reset = function(){
	// O player é criado no meio da tela(layout)
	hero.x = canvas.width /2;
	hero.y = canvas.height /2;
	//Criacao do monstro de forma randomica
	monster.x = 32 +(Math.random()* (canvas.width - 64));
	monster.y = 32 +(Math.random()* (canvas.height - 64));
}

//Controle de Direções
// SETA CIMA
var update = function(modifier){
	if (38 in keysDown){
		hero.y -= hero.speed * modifier;
	}
//SETA BAIXO
	if (40 in keysDown){
		hero.y += hero.speed * modifier;
	}
// SETA ESQUERDA
	if (37 in keysDown){
		hero.x -= hero.speed * modifier;
	}
//SETA DIREITA
	if (39 in keysDown){
		hero.x += hero.speed * modifier;
	}
//Colisão
if (hero.x <= (monster.x + 32)&& monster.x <= (hero.x +32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y +32)){
	++monsterCought;
	reset ();
	
	// Mudança de cenario

if (monsterCought == 10){
	backgroundReady = true;
	bgImage.src="./imageRPG/fundo2.jpg";
	
		}
	}
};

// Desenhar na Tela
var render = function(){
	if(bgReady){
		ctx.drawImage(bgImage,0,0);
	}
	if(heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if(monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}


//Placar

ctx.fillStyle = "rgb(0,0,0)";
ctx.font = "22px Verdana";
ctx.textAlign = "left";
ctx.textBaseLine = "top";
ctx.fillText("Capturados: "+ monsterCought,32,32);

};

// Loop do Jogo

var main = function(){
	// retornar número em milisegundos
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
	render();
	then = now;
};

// Inicia o jogo
reset();
var then = Date.now;
// O metodo setInterval chama uma funçao ou avalia uma expressao em intervalos especificos, nesse caso em Milisegundos.
setInterval(main, 1);

