/* Task 1
let num = [1, 19, 2, 18, 3, 17, 4, 16, 5 ,15, 6, 14, 7, 13, 8, 12, 9, 11, 10, 20];

/!*let sort = num.sort((a, b)=> {
return a - b;
})
console.log(sort);*!/


/!*
let num = [1, 19, 2, 18, 3, 17, 4, 16, 5 ,15, 6, 14, 7, 13, 8, 12, 9, 11, 10]

let sort = num.sort((a, b)=> {
    return b - a;
})
console.log(sort);*!/


/!*
let filter = num.filter((value, index, array) => {
    if(value % 3 === 0 && 3){
        return value;
    }
})
console.log(filter);*!/


/!*
let filter = num.filter((value) => value % 10 === 0 && 10)
console.log(filter);*!/


/!*
num.forEach(value => {
    console.log(value);
})*!/

/!*
let map = num.map((value) => {
    return value * 3;
})
console.log(map);*!/
*/




/* Task 2
let word = ["Кнопка", "Екран", "Монітор", "Клавіатура", "Слова", "Абетка", "Кронштейн", "Канава", "Жінка", "Дівчина", "Машина", "Поїзд", "Літак", "Хор", "Барабани", "Гітара"];

/!*
let sort = word.sort()
console.log(sort);
*!/

/!*
let sort = word.sort((a, b) => {
    if(a>b){
        return -1
    }
    return 1
})
console.log(sort);*!/

/!*let filter = word.filter(value => {
    if(value.length < 4){
        return value
    }
})
console.log(filter);*!/

/!*
let map = word.map(value => value + "!")
console.log(map);*!/
*/




let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];

/*
let sort = users.sort(((a, b) => a.age - b.age))
console.log(sort);*/

/*
let sort = users.sort(((a, b) => b.age - a.age))
console.log(sort);*/

/*let sort = users.sort((a, b) => {
   if (a.name.length > b.name.length){
       return 1
   }
   return -1
})
console.log(sort);*/

/*let sort = users.sort((a, b) => {
    if (a.name.length > b.name.length){
        return -1
    }
    return 1
})
console.log(sort);*/

/*
let json = JSON.stringify(users);
let parse1 = JSON.parse(json)

let a = [];
let map = users.map((user, index) => {
    if (user.age > 30){
        user.id = index
    } else {
        user.id = index
    }
    a.push(user)
    return user
})
console.log(map);
console.log(parse1);
console.log(a);

let sort = map.sort((a, b) => {
    return b.id - a.id
})
console.log(sort);*/

/*
function calc(num1, num2, does) {
    this.num1 = num1;
    this.num2 = num2;
    this.does = does

    this.calcs
}

let numbers = new calc(prompt("число1"), prompt("число2"), prompt("дія"))
*/

/*
let numbers;
let calc = numbers.map((value, index) => {
    if (value === "-"){

    }
})*/
