///let str = "Привіт";
let num = 123;
let flag = true;
let txt = "true";


let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3
let a4 = 5 / 3;
let a5 = 5 % 3;


let a6 = a5;
let a7 = 3 % 5;
let a8 = 5 + "3";
let a9 = "5" - 3;
let a10 = 75 + "кг";


let height = 23;
let width = 10;
let s = height * width;


let heightC = 10;
let dC = 4;
let v = 3.14 * Math.pow(dC/2, 2) * heightC;



let n = 3;
let m = 4;
let k1 = (Math.pow(n,2) + Math.pow(m,2));
let k2 = Math.sqrt(k1);


let str0 = "Hello world";
document.write(str0);
alert(str0);
console.log(str0);


///alert("Бігун Богдан Петрович,\n 18,\n музика");


let str1 = "Хто";
let str2 = "ти";
let str3 = "такий?";
let concatenation = str1.concat(" ", str2, " ", str3);
document.write(concatenation);


let strTwenty = "20";
let a = 5;
document.write(strTwenty + a + "<br/>");     //205
document.write(strTwenty - a + "<br/>");    //15
document.write(strTwenty * "2" + "<br/>"); //400
document.write(strTwenty / 2 + "<br/>");  //10


parseInt("3.14");
parseInt("-7.875");
parseInt("435");
parseInt("Вася");
console.log(parseInt("3.14"));      ///3
console.log(parseInt("-7.875"));   ///-7
console.log(parseInt("435"));     ///435
console.log(parseInt("Вася"));   ///NaN


//let str = prompt("Enter something", "ho-ho")
//console.log(str);


let num1 = prompt("Введи число", "2");
let num2 = prompt("Введи число", "3");
let num3 = num1 - num2;
alert(num3);

let name = prompt("Ваше ім\'я");
let surname = prompt(" Ваше прізвище");
let age = prompt("Ваш вік");
alert("Добрий вечір, " + name + " " + surname + ", мої вітання з тим що тобі " + age);
