/* Task1
let textArea = document.createElement("textarea");
document.body.appendChild(textArea);
textArea.addEventListener ("input", (ev) =>{
    let text = textArea.value
    localStorage.setItem("text", `${textArea.value}`)
})
textArea.value = localStorage.getItem("text")*/


/* Task5
let form = document.createElement("form");

let input = document.createElement("input");
input.setAttribute("type","text");

let textArea = document.createElement("textarea");
let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
/!*checkbox.setAttribute('checked', 'checked')*!/
let radio = document.createElement("input");
radio.setAttribute("type", "radio");
let button = document.createElement("button");

document.body.appendChild(form);
form.appendChild(input);
document.body.appendChild(textArea);
form.appendChild(checkbox);
form.appendChild(radio);
document.body.appendChild(button);
button.innerText = "Clear";

button.addEventListener("click", (ev) =>{   /// стирає всі записані дані
    localStorage.clear();
})

input.addEventListener("input", (ev) => {
    localStorage.setItem("inp1", `${input.value}`);
})
input.value = localStorage.getItem("inp1")

textArea.addEventListener("input", (ev) => {
    localStorage.setItem("inp2", `${textArea.value}`)
})
textArea.value = localStorage.getItem("inp2")

checkbox.addEventListener("click", (ev) => {
    localStorage.setItem("value1", `${checkbox.checked}`);
})
if(localStorage.getItem("value1")){checkbox.setAttribute("checked", "checked")}

radio.addEventListener("click", (ev) => {
    localStorage.setItem("radio1", `${radio.checked}`)
})
if(localStorage.getItem("radio1")){radio.setAttribute("checked", "checked")}*/


/*
 Task10
let div = document.createElement("div")
document.body.appendChild(div)

let button1 = document.createElement("button");
let button2 = document.createElement("button");
div.appendChild(button1)
div.appendChild(button2)
button1.innerText = "<--";
button2.innerText = "-->";

let textArea = document.createElement("textarea") /// створення поля вводу
document.body.appendChild(textArea) /// додавання в body

let i = 0;
let button3 = document.createElement("button"); /// створення кнопки для clear
let button4 = document.createElement("button"); /// створення кнопки для save
document.body.appendChild(button3)
document.body.appendChild(button4)
button4.innerText = "Save"; /// текст кнопки
button3.innerText = "Clear"; /// текст кнопки

/!*textArea.addEventListener("input", (ev) => {
    localStorage.setItem("inp", `${textArea.value}`)
})
textArea.value = localStorage.getItem("inp")*!/

button1.addEventListener("click", (ev) => {
    textArea.value = localStorage.getItem(`${i-=1}`)
})
button2.addEventListener("click", (ev) => {nj
    textArea.value = localStorage.getItem(`${i++}`)
})
button3.addEventListener("click", (ev) =>{   /// функція для button1, якщо її нажати...
    localStorage.clear();  /// ...стирає всі записані дані
})
button4.addEventListener("click", (ev) => { /// функція для button1, якщо її нажати...
    localStorage.setItem(`${i++}`, textArea.value) /// ...значення зберігається в наступній змінній
})
*/

/*
let div = document.createElement("div")
document.body.appendChild(div)

let form = document.createElement("form")
div.appendChild(form)

let PIP = document.createElement("input")
form.appendChild(PIP)

let num = document.createElement("input")
form.appendChild(num)

let email = document.createElement("input")
form.appendChild(email)

let firm = document.createElement("input")
form.appendChild(firm)

let dep = document.createElement("input")
form.appendChild(dep)

let birthday = document.createElement("input")
form.appendChild(birthday)


PIP.addEventListener("input", (ev) => {

})*/
