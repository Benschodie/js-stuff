"use strict"; 

// function erstellen standart
// let functionsname = function (parameter, parameter){
// functionsinhalte
// };

// Bsp: einfache function

// let f = function (a, b) {
//   let summe = a + b;
//     return summe;   
// };

// Einfacher aufruf im terminal mit übergabe von parametern

// console.log(f(2, 3));
// console.log(f(5, 4));

// einer function eine function übergeben:

let run = function (callback){
	console.log("run(); methode wurde ausgeführt");
	callback();
};

let f = function () {
	console.log("f(); wurde ausgeführt");
};

// Aufruf der run function die dann wiederrum die f function aufruft
run(f);