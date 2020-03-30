// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log('hello! ' + this.name);		
// 	};
// }

// User.prototype.exit = function() {
// 	console.log('User ' + this.name + ' logout!');	
// };

// let ivan = new User('Ivan', 25);       //   Способ №3: Конструктор (new) - this = новый объект 
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

//                  /\ /\ /\
//ivan.exit();      || || ||     EcmoScript5 !!!

 		//	  	 				|| || ||     EcmoScropt6 !!!
			//	  				\/ \/ \/ 


// class User {
// 	constructor(name, surname, id) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.id = id;
// 		this.human = true;
// 	}
// 	hello() {
// 		console.log(`Hi! ${this.name + ' ' + this.surname}`);
// 	}
// 	exit() {
// 		console.log(`Comrad ${this.name + ' ' + this.surname} logout!`);
// 	}
// }

// let ivan = new User('Ivan', 'Petrichenko', 1);
// let alex = new User('Alexandr', 'Borodach', 2);
// let dima = new User('Dmitriy', 'Klassen', 3);

// ivan.hello();
// alex.exit();
// console.log(dima.name, dima.surname + ' login!');


// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		// return this.a + this.b;  //    wrong !!!
// 		return a + b;
// 	}
// 	console.log(sum());	
// }

// showThis(4, 5);
// showThis(5, 5);           //   Способ №1: Просто вызов функции      window/undefined

// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);      //   Способ №2: Метод объекта - this = объект 
// 		function shout() {
// 			console.log(this);			
// 		}
// 		shout();
// 	}
// };
// obj.sum();

