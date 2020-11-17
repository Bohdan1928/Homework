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

let func = (num, num2, element) => {
    let table = document.createElement("table")
    document.body.appendChild(table)
    table.style.border = num
    table.style.width = "40%"
    table.style.cellpadding = "5"

    for (let i = 0; i < num.length; i++) {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        table.appendChild(tr)
        tr.appendChild(th)

        th.innerText = element
    }
}
func(4,3,"nfvkjbvli")
