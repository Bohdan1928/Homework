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


/* Task 7-8
function mass(array){
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
            return min
        }
        if (array[i] > max){
            max = array[i]
            return max
        }
    }
    console.log(min);
    console.log(max);
}
mass([0.3, 0.004, 1])*/


/* Task 9
function mass(array){
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        return arguments[i]
    }
}
mass([34, "true", false])*/


/* Task 10
function mass(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        }
    console.log(sum / 4)
}
mass([34, 14, 80, 30])*/


/* Task 11
function mass(array){
    console.log(array.length);
    return array.length;
}
mass([{class: false}, {213: 213}, {23: "Car"}])*/


/* Task12
function mass(array){
    let sum = 0;
    for (let i of array) {
        if (typeof i === "object" && !Array.isArray(i)){
            for (let obj in i) {
                sum++;
            }
        }
    }
    console.log(sum);
}

mass([{class: "Body"}, 22, {age: 22}, {num: 1, look: false}, false])*/


function mass(array1, array2){
    let sum = []
    for (let k = 0; k < sum.length; k++) {
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                sum[k] = array1[i] + array2[j];
            }
        }
    }
    console.log(sum);
    return sum
}
mass([0, 2, 3, 4, 5], [2, 3, 4, 5, 6])