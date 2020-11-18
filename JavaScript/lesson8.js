/* Task1
let wrap4 = document.getElementById("wrap4")

wrap4.onclick = () =>{
    if (wrap4.innerText){
        wrap4.innerText = ""
    }
    return
}*/


/* Task3
let submit = document.getElementById("wrap1");
submit.onclick = () => {
    submit.innerText = "";
    submit.style.backgroundColor = "white";
}*/


/* Task5
let submit = document.forms.myForm2.submit
document.forms.myForm2.submit.addEventListener(`click`,(ev) => {ev.preventDefault()})

submit.onclick = () => {
    if (myForm2.someText.value >= 18) {
        alert("Вітаю, тобі більше 18")
    } else{
       alert("Сорі, але тобі менше 18")
    }
}*/


/* Task7!
let red = document.getElementById("wrap2")
let black = document.getElementById("wrap2-1")
black.style.display = "none"

red.addEventListener("click",(ev) =>{
    black.style.display = "block"
})

black.addEventListener("click",(ev) =>{
    red.style.display = "block"
    black.style.display = "none"
})*/


/*let comments = [
    {
        title: "Пояснення",
        body: "щось та й робить"
    },
    {
        title: "Звіт",
        body: "101011010101"
    },
    {
        title: "Результат",
        body: "01011010111001"
    }
]*/
/*comments.forEach((value) =>  {
    let div1 = document.createElement("div")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let button = document.createElement("button")

    div1.appendChild(h2)
    div1.appendChild(p)
    div1.appendChild(button)
    document.body.appendChild(div1)

    div1.style.width = "150px"
    div1.style.height = "200px"
    div1.style.backgroundColor = "red"
    h2.innerText = value.title
    p.innerText = value.body
    button.innerText = "click"

    let flag = false
button.onclick = () =>{
        if(flag === false){
            div1.style.display = "none"
        } else if(flag === true){
            div1.style.display = "block"
        }
}
})*/


/* Task 13
let button = document.createElement("button")
document.body.appendChild(button)
button.innerText = "Click"
let myForm1 = document.forms.myForm2.someText1
let myForm2 = document.forms.myForm2.someText2
let myForm3 = document.forms.myForm21.someText3
let myForm4 = document.forms.myForm21.someText4

button.onclick = () => {
    console.log(myForm1.value);
    console.log(myForm2.value);
    console.log(myForm3.value);
    console.log(myForm4.value);
}*/


/* Task17
let func = (num, num2, element) => {
    let div = document.createElement(element)
    let table = document.createElement("table");
    document.body.appendChild(div)
    div.style.backgroundColor = "black"
    div.appendChild(table);
    table.style.border = "1";
    table.style.width = "40%";
    table.style.cellpadding = "5";

    for (let i = 0; i < num; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let i = 0; i < num2; i++) {
            let th = document.createElement("th");
            tr.appendChild(th);
            th.innerText = "ячейка2"
            th.style.color = "white"
        }
    }
}
func(4,3,"div");
*/


/* Task23
let button = document.createElement("button")
document.body.appendChild(button)
button.innerText = "Click"
let myForm1 = document.forms.myForm2.someText1
let myForm2 = document.forms.myForm2.someText2
let myForm3 = document.forms.myForm2.someText3

button.onclick = () => {
    let func = () => {
        let div = document.createElement("div")
        let table = document.createElement("table");
        document.body.appendChild(div)
        div.style.backgroundColor = "black"
        div.appendChild(table);
        table.style.border = "1";
        table.style.width = "40%";
        table.style.cellpadding = "5";

        for (let i = 0; i < myForm1.value; i++) {
            let tr = document.createElement("tr");
            table.appendChild(tr);
            for (let i = 0; i < myForm2.value; i++) {
                let th = document.createElement("th");
                tr.appendChild(th);
                th.innerText = myForm3.value
                th.style.color = "white"
            }
        }
    }
    func(myForm1.value,myForm2.value,myForm3.value);
}*/

/*
let div = document.createElement("div")
document.body.appendChild(div)

let button1 = document.createElement("button")
div.appendChild(button1)
button1.innerText = "right"
let button2 = document.createElement("button")
div.appendChild(button2)
button2.innerText = "left"

let img1 = document.createElement("img")
img1.setAttribute("src", "download1.jpg")
let img2 = document.createElement("img")
img2.setAttribute("src", "download2.jpg")
let img3 = document.createElement("img")
img3.setAttribute("src", "download3.jpg")
let img4 = document.createElement("img")
img4.setAttribute("src", "download4.jpg")

div.appendChild(img1)
div.appendChild(img2)
div.appendChild(img3)
div.appendChild(img4)

img1.style.display = "block"
img2.style.display = "none"
img3.style.display = "none"
img4.style.display = "none"

button1.onclick = () =>{
    if(img1.style.display = "block"){
        img1.style.display = "none"
        img2.style.display = "block"
}
}*/
