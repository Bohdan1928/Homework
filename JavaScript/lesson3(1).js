/* Task1
let user = {
    human: {
        name: "Dodik",
        age: 19,
        house: false,
        car: {
            name: "Volkswagen",
            lastname: "Golf",
            door: 3,
            injection: 2.0,
            fuel: false
        },
        dog: {
            name: "Garik",
            age: 5,
            legs: 4,
            nose: true,
            children: undefined
        },
        book: {
            name: "Пітер Пен",
            age: 40,
            pages: 243,
            pictures: true,
            class: "Фантастика"
        }
    }
}
console.log(user);*/


/* Task2
let all = [["Шарік", "Тузік", "Валік", "Джек", "Рокі"],["Іра", "Роман", "Діана", "Богдан", "Андрій"],["Volkswagen", "Nissan", "Mitsubishi", "Audi", "Skoda",]]
console.log(all);*/


/* Task3
let all = {
    home: {
        floor: 3,
        footer: true,
        age: 6,
        street:{
          name: "Чорновола",
          number: 112
        },
        room: ["bedroom", "bathroom", "kitchen", "bedroom", "children room", "living room"]
    },
    driver: {
        name: "Andriy",
        age: 19,
        wife: false,
        categories: ["A", "B", "C"],
        work: {
            company: "Tran-Service",
            time: 3,
            salary: 600 + "$"
        }
    },
    toys: {
        categories: "car",
        material: "plastic",
        set: ["car", "remote control", "battery", "instruction"],
        live: false,
        warning: {
            age: 3,
            useTime: 2 + "hour"
        }
    },
    table: {
        material: "tree",
        characteristic: {
            height: 1 + "m",
            weight: 2.5 + "m",
            length: 2.5 + "m",
        },
        figure: ["square", "rectangle"],
        transformer: true,
        mass: 100 + "kg"
    },
    bag: {
        characteristic: {
            firm: "LV",
            price: 150 + "$",
            color: ["red,", "black,", "white"]
        },
        volume: 4 + "l",
        name: "Alis",
        year: 2019,
        man: false
    }
}
console.log(all);*/


/* Task3
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
console.log(users[7].status);
console.log(users[4].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log((users[4].age), (users[4].name));
console.log((users[5].age), (users[5].status));*/

/* Task4
let content = document.getElementById("content");
console.log(content.innerText);*/

/* Task5
let rules = document.getElementById("rules");
console.log(rules.innerText);*/

/* Task6
let content = document.getElementById("content");
content.innerText = "efvevev"*/

/* Task7
let rules = document.getElementById("rules");
rules.innerText = "efvevev"*/

/* Task8-9
let content = document.getElementById("content");
content.style.backgroundColor = "red"
content.style.color = "darkblue"
let rules = document.getElementById("rules");
rules.style.backgroundColor = "red"
rules.style.color = "darkblue"
let ul = document.getElementsByTagName("ul")
for (let i = 0; i < ul.length; i++){
    ul[i].style.backgroundColor = "red";
    ul[i].style.color = "darkblue"
}
*/

/*let rules = document.getElementById("rules");
console.log(rules.classList);*/

/*
let fc_rules = document.getElementsByClassName("fc_rules");
for (let i = 0; i < fc_rules.length; i++){
    console.log(fc_rules[i].innerText);
}*/

/*
let fc_rules = document.getElementsByClassName("fc_rules");
for (let i = 0; i < fc_rules.length; i++){
    fc_rules[i].style.color = "red";
}*/

