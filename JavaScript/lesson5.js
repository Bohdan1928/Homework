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


let car = {
    model: "Toyota Corolla",
    maker: "Toyota-motors",
    years: 2015,
    maxSpeed: 250,
    value: 2.5,
    drive(){
        console.log(`Їдемо зі швидкістю ${maxSpeed} км/год`);
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
car.info();
car.increaseMaxSpeed(25);
car.changeYear(0.5);
car.addDriver({
    name: "Ihor",
    age: 23,
    exp: 3,
})

console.log(car);


