/*let tag = {
    name: "a",
    action: "Тег является одним из важных элементов HTML и предназначен для создания ссылок.",
    attrs:
        [{nameAtt:"accesskey", doAtt: "Активация ссылки с помощью комбинации клавиш."},
        {nameAtt2: "coords", doAtt: "Устанавливает координаты активной области"}]
}*/
/* Task 1
function Tag(titleOfTag, action, attrs){
    this.titleOfTag = titleOfTag
    this.action = action;
    this. attrs = attrs;
}
let a = new Tag("a","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(a);
let div = new Tag("div","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(div.attrs);
let h1 = new Tag("h1","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(h1);
let span = new Tag("span","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(span.titleOfTag);
let input = new Tag("input","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(input);
let from = new Tag("from","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(from.action);
let option = new Tag("option","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(option.titleOfTag);
let select = new Tag("select","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(select.attrs);*/


/* Task2
class Tags{
    constructor(titleOfTag, action, attrs) {
            this.titleOfTag = titleOfTag
            this.action = action;
            this. attrs = attrs;
    }
}
let a = new Tags("a","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(a);
let div = new Tags("div","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(div.attrs);
let h1 = new Tags("h1","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(h1);
let span = new Tags("span","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(span.titleOfTag);
let input = new Tags("input","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(input);
let from = new Tags("from","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(from.action);
let option = new Tags("option","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(option.titleOfTag);
let select = new Tags("select","Тег является одним из важных элементов HTML и предназначен для создания ссылок. ",
    [{nameAttr: "accesskey", actoinAttr: "Активация ссылки с помощью комбинации клавиш."},{nameAttr2: "coords", actionAttr: "Устанавливает координаты активной области."}])
console.log(select.attrs);
*/


/* Task 3
let car = {
    model: "Toyota Corolla",
    maker: "Toyota-motors",
    years: 2015,
    maxSpeed: 250,
    value: 2.5,
    drive(){
        console.log(`Їдемо зі швидкістю ${(this.maxSpeed)} км/год`);
    },
    info(){
        console.log(car.model, car.maker, car.years, car.maxSpeed, car.value);
    },
    increaseMaxSpeed(newSpeed){
        car.maxSpeed += newSpeed;
        console.log(car.maxSpeed);
    },
    changeYear(newValue){
        car.value += newValue;
        console.log(car.value);
    },
    addDriver(driver) {
        this.driver1 = driver;
    }
}
car.drive()
car.info();
car.increaseMaxSpeed(25);
car.changeYear(0.5);
car.addDriver({
    name: "Ihor",
    age: 23,
    exp: 3,
})

console.log(car);*/

/*
 Task 4
function car(model, maker, years, maxSpeed, value) {
    this.model = model;
    this.maker = maker;
    this.year = years;
    this.maxSpeed = maxSpeed;
    this.value = value;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год `);
    }
    this.info = function () {
        console.log(this.model, this.maker, this.years, this.maxSpeed, this.value);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }
    this.changeYear = function (newValue) {
        this.year += newValue;
        console.log(this.year);
    }
    this.addDriver = function (driver) {
        this.driver1 = driver
    }
    this.ride = function (){
        console.log(this)
    }
}
let toyota = new car("Toyota Corolla", "Toyota-motors", 2015, 250, 2.0)
let mazda = new car("mazda 6", "Mazda-motors",2016, 275, 2.4)

toyota.drive();
toyota.info();
toyota.increaseMaxSpeed(20);
toyota.changeYear(4);
toyota.addDriver({
    name: "Ihor",
    age: 23,
    exp: 3,
})
toyota.ride()

mazda.drive();
mazda.info();
mazda.increaseMaxSpeed(20);
mazda.changeYear(4);
mazda.addDriver({
    name: "Ihor",
    age: 23,
    exp: 3,
})
mazda.ride()
*/

/*/!* Task 5*!/
class Add {
    constructor(model, maker, years, maxSpeed, value, ) {
        this.model = model;
        this.maker = maker;
        this.year = years;
        this.maxSpeed = maxSpeed;
        this.value = value;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }
    info() {
        console.log(this.model, this.maker, this.year, this.maxSpeed, this.value);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }
    changeYear(newValue) {
        this.year += newValue;
        console.log(this.year);
    }
    addDriver(driver) {
        this.driver1 = driver
    }
    ride = function (){
        console.log(this)
    }
}

let toyota = new Add("Toyota Corolla", "Toyota-motors", 2015, 250, 2.0)
let mazda = new Add("mazda 6", "Mazda-motors",2016, 275, 2.4)

toyota.drive();
toyota.info();
toyota.increaseMaxSpeed(25);
toyota.changeYear(4);
toyota.addDriver({
            name: "Ihor",
            age: 23,
            exp: 3
        })
toyota.ride()

mazda.drive();
mazda.info();
mazda.increaseMaxSpeed(25);
mazda.changeYear(4);
mazda.addDriver({
    name: "Ihor",
    age: 23,
    exp: 3
})
mazda.ride()*/

/* Task 6
class Pop {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}
class Pri {
    constructor(name, age, find){
        this.name = name;
        this.age = age;
        this.find = find;
    }
}
let pop =[
    new Pop("Diana","16", 37),
    new Pop("Ira","18", 38),
    new Pop("Nadia","20", 39.5),
    new Pop("Natalia","21", 39),
    new Pop("Lily","18", 40),
    new Pop("Rosa","17", 35),
    new Pop("Karina","19", 41),
    new Pop("Yulia","18", 36.5),
    new Pop("Marta","17", 37.5),
    new Pop("Olga","22", 40.5)
];

let pri = new Pri("Bohdan", 18, 37)

for (let i = 0; i < pop.length; i++) {
    if(pop[i].foot === pri.find){
        console.log(pop[i]);
    }
}*/

/* Task 7
function popFunc(name, age, foot) {
    this.name = name;
    this.age = age;
    this.foot = foot;
}
function priFunc(name, age, find) {
    this.name = name;
    this.age = age;
    this.find = find;
}
let pop =[
    new popFunc("Diana","16", 37),
    new popFunc("Ira","18", 38),
    new popFunc("Nadia","20", 39.5),
    new popFunc("Natalia","21", 39),
    new popFunc("Lily","18", 40),
    new popFunc("Rosa","17", 35),
    new popFunc("Karina","19", 41),
    new popFunc("Yulia","18", 36.5),
    new popFunc("Marta","17", 37.5),
    new popFunc("Olga","22", 40.5)
];
let pri = new priFunc("Bohdan", 18, 37)

for (let i = 0; i < pop.length; i++) {
    if (pop[i].foot === pri.find) {
        console.log(pop[i]);
 w   }
}*/
