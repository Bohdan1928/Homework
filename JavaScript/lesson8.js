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
