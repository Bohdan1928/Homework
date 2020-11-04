/*
/!*
 Task1-2
function mas(one,two){

    console.log(one, random([]));
}
mas([1,"23", true]);
*!/

function random() {
    let mass = [];
    for (let i = 0; i < 10; i++){
        mass[i] = Math.random() * 100;
    }
    console.log(mass);
}
random()
*/


/* Task3
function num(one, two, three){
    (a > b && b > c) ? console.log(c) : (a < b && b < c) ? console.log(a) : console.log(b);
}

let a = prompt("Number1");
let b = prompt("Number1");
let c = prompt("Number3");
num(a, b, c)

*/

/*
 Task4
function num(one, two, three){
(a > b && b > c) ? console.log(a) : (a < b && b > c) ? console.log(b) : console.log(c);
 }

let a = prompt("Number1");
let b = prompt("Number1");
let c = prompt("Number3");
num(a, b, c)


*/

/*
function arr(){
    if (arr[i] < min) {
        min = arr[i]
    }
}

let a = prompt("Number");
arr(a)
*/

/* Task5
function jkfwkh() {
     let min = arguments[0];
     let max = arguments[0];
     for (let i = 0; i < arguments.length; i++){
         if (arguments[i] < min){
             min = arguments[i];
         }
         if (arguments[i] > max){
             max = arguments[i]
         }
    }
     console.log(max)
    return (min)
}
jkfwkh(10, 11, 25, 14)
*/


/* Task6
function mass(one){
    return one;
}
console.log(mass([1,5,"Курлик", true]))*/
