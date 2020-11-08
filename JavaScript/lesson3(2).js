/*
Task1
let human = {
    name: "Erik",
    age: 20,
    hasWife: true
}
let dog = {
    breed: "labrador",
    children: true,
    eat: false
}
let bag = {
    firm: "D&G",
    price: 150,
    color: "blue"
}
let lamp = {
    color: "red",
    price: 25,
    power: "battery"
}
let cup = {
    material: "glass",
    volume: 250,
    pictures: true
}
*/


/* Task2-4
let human = {
    face: ["nose", "eyes", "ears"],
    age: 20,
    hasWife: true,
    son: {
        name: "Klark",
        age: 3,
    }
}
let dog = {
    breed: ["labrador", "huskies", "Chihuahua"],
    children: true,
    language: {
        onUkr: "Собака",
        onEng: "Dog",
        onDeu: "Hund"
    }
}
let bag = {
    firm: "D&G",
    price: 150,
    color: ["blue", "red", "green", "black"],
    city: {
        l`viv: true,
        kiev: false,
        kharkiv: true
    }
}
let tableLamp = {
    fastening: false,
    time: 100500,
    power: ["battery", "rosette", 120-180],
    lamp: {
        material: "glass",
        time: 1000,

    }
}
let cups = {
    material: "glass",
    volume: [250, 300, 150],
    pictures: true,
    magazine: {
        lviv: 2,
        kiev: 4,
        kharkiv: 1
    }
}


for (const humanKey in human) {
        console.log(humanKey);
}
console.log("----");
for (const dogKey in dog) {
    console.log(dogKey);
}
console.log("----");
for (const bagKey in bag) {
    console.log(bagKey);
}
console.log("----");
for (const tableLampKey in tableLamp) {
    console.log(tableLampKey);
}
console.log("----");
for (const cupsKey in cups) {
    console.log(cupsKey);
}

console.log(Object.keys(human));
console.log(Object.keys(dog));
console.log(Object.keys(bag));
console.log(Object.keys(tableLamp));
console.log(Object.keys(cups));
*/


/*let cars = [
    Audi = {
        model: "Q5",
        year: 2013,
        horses: 300,
        color: "darkblue",
        driver: {
            name: "Anna",
            age: 22,
            sex: "woman",
            experience: 2
        }
    },
    Volkswagen1 = {
        model: "Passat b6",
        year: 2009,
        horses: 200,
        color: "darkblue",
        driver: {
            name: "Pavel",
            age: 35,
            sex: "man",
            experience: 15
        }
    },
    Chevrolet = {
        model: "Aveo",
        year: 2005,
        horses: 100,
        color: "grey",
        driver: {
            name: "Ihor",
            age: 26,
            sex: "man",
            experience: 4
        }
    },
    Renault = {
        model: "MEGAN",
        year: 2015,
        horses: 200,
        color: "brown",
        driver: {
            name:"Ilona",
            age: 40,
            sex: "woman",
            experience: 4
        }
    },
    Volkswagen2 = {
        model: "GOLF",
        year: 2017,
        horses: 370,
        color: "darkred",
        driver: {
            name: "Stas",
            age: 21,
            sex: "man",
            experience: 1
        }
    },
    Peugeot = {
        model: "Expert",
        year: 2002,
        horses: 100,
        color: "white",
        driver: {
            name:"Arsen",
            age: 19,
            sex: "man",
            experience: 1
        }
    },
    Ford = {
        model: "Fiesta",
        year: 2016,
        horses: 200,
        color: "grey",
        driver: {
            name:"Oleg",
            age: 39,
            sex: "man",
            experience: 19
        }
    },
    Toyota = {
        model: "Vensa",
        year: 2015,
        horses: 300,
        color: "black",
        driver: {
            name: "Ivan",
            age: 70,
            sex: "man",
            experience: 47
        }
    },
    Toyota = {
        model: "Auris",
        year: 2016,
        horses: 200,
        color: "grey",
        driver: {
            name:"Nadiya",
            age: 30,
            sex: "woman",
            experience: 7
        }
    },
    Volkswagen3 = {
        model: "Jetta",
        year: 2019,
        horses: 200,
        color: "black",
        driver: {
            name: "Bogdan",
            age: 19,
            sex: "man",
            experience: 1
        }
    }
]


let cities = [
    city1 = {
        name: "L`viv",
        population: 900000,
        country: "Ukraine",
        region: "Europe"
    },
    city2 = {
        name: "Kiev",
        population: 1000000,
        country: "Ukraine",
        region: "Europe"
    },
    city3 = {
        name: "Odessa",
        population: 1000000,
        country: "Ukraine",
        region: "Europe"
    },
    city4 = {
        name: "Vienna",
        population: 1897000,
        country: "Austria",
        region: "Europe"
    },
    city5 = {
        name: "Warsaw",
        population: 1700000,
        country: "Poland",
        region: "Europe"
    },
    city6 = {
        name: "Krakow",
        population: 761000,
        country: "Poland",
        region: "Europe"
    },
    city7 = {
        name: "Nice",
        population: 340000,
        country: "France",
        region: "Europe"
    },
    city8 = {
        name: "New-Yorke",
        population: 8399000,
        country: "USA",
        region: "North America"
    },
    city9 = {
        name: "Brasilia",
        population: 2606000,
        country: "Brasil",
        region: "South America"
    },
    city10 = {
        name: "Mykolaiv",
        population: 14787,
        country: "Ukraine",
        region: "Europe"
    }
]*/


/*
let i = 0;
let x = 0
while(i < cars.length){
    i++;
    x += i;
}
console.log(x)
let j = 0;
let y = 0
while(j < cars.length){
    j++;
    y += i;
}

console.log(y);
for (let i = 0; i < cars.length; i++) {
}
console.log(cars);
for (let i = 0; i < cities.length; i++) {
}
console.log(cities);


for (const car of cars) {
}
console.log(cars);
for (const cities of cities) {
}
console.log(cities);

*/


/* Task 11-12
let f = JSON.stringify(human);
let clonedHuman = JSON.parse(f);

let g = JSON.stringify(dog);
let clonedDog = JSON.parse(g);

let  h = JSON.stringify(bag);
let clonedBag = JSON.parse(h);

let i = JSON.stringify(lamp);
let clonedLamp = JSON.parse(i)

let j = JSON.stringify(cup);
let clonedCup = JSON.parse(j);*/



/* Task 13
for (let i = 0; i < cars.length; i++) {
    console.log(JSON.stringify(cars[i]))
}
*/

/* Task 14
for (let i = 0; i < cities.length; i++) {
    console.log(JSON.stringify(cities[i]))
}*/

/* Task 15
let s = []
for (let i = 0; i < cars.length; i++) {
   s.push(JSON.stringify(cars[i]))
}
console.log(s);*/


/* Task 16
let users = [
   user1 = { name: "Andriy", age: 42, skills:['HTML/CSS','JS','C++']},
    user2 = { name: "Bogdan", age: 32, skills: ['HTML/CSS','JS']},
    user3 = { name: "Roman", age: 42, skills: ['HTML/CSS','JS','PHP']}
];

for(let i of users){
    for(let j of i.skills){
        console.log(j);
    }
}
*/


/* Task 17
let users = [
    user1 = { name: "Andriy", age: 42, skills:['HTML/CSS','JS','C++']},
    user2 = { name: "Bogdan", age: 32, skills: ['HTML/CSS','JS']},
    user3 = { name: "Roman", age: 42, skills: ['HTML/CSS','JS','PHP']}
];
let a = [];
for(let i of users){
    for(let j of i.skills){
    }
    a.push(i.skills)
}
console.log(a);
*/


/* Task 19
let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for(let i of users) {
    console.log("_________");
    for (let j of i.skills) {
        console.log(j);
    }
}*/


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

/* Task 24
let a = [];
for(let i of users){
    console.log("_______");
    a.push(i.address)
    console.log(i.address);
    a.push(i.address);
}
console.log(a);
*/

/* Task 25!
let avatar = document.createElement('div');
document.body.appendChild(avatar)

    for (const value in users) {
        let avatar1 = document.createElement("div");
        document.body.appendChild(avatar1);
        avatar1.style.backgroundColor = "red";
        avatar1.innerHTML= users[value];
    }
*/

/* Task 26
let avatar = document.createElement('div');
document.body.appendChild(avatar)

for (const i in users) {
    for (const value in users[i]) {
        let avatar1 = document.createElement("div");
        document.body.appendChild(avatar1);
        avatar1.style.backgroundColor = "red";
        avatar1.innerHTML = value;
    }
}*/
