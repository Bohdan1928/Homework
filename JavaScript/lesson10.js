function life(bus ,callback){
    console.log("Прокинувся");

    setTimeout(() => {
        console.log("Йду на маршрутку");
        setTimeout(() => {
            if(bus === 9){
                callback(null, "Їду в універ")
            } else{
                callback("Нема маршрутки.", null);
            }
        }, 2000)
    }, 1000)
}
function univer(aud, callback){
    callback("Біжу в аудиторію");
        if(aud < 5){
            for (let i = 0; i < aud; i++) {
                callback("Зайшов не в ту аудиторію. Вигнали", null)
            }
        } else if (aud === 5) {
            callback(null, "Зайшов в аудиторію, сів за парту");
        }
}

function lifeInUniver(money, callback){
    callback("Пара акінчиласью Йду в кормушку")

    if (money < 20){
        callback("Вигнали з кормушки. Помер з голоду")
    }
}
life(9,(err, un) =>{
    if(err){
        console.log(err, "Я завалив сесію");
    } else{
        console.log("Сів в маршрутку.", un);
        setTimeout(() => {

            console.log("Я на місці");
        }, 1000)
        univer(5, (err, good) => {
            setTimeout(()=>{
                if(err){
                    console.log(err);
                } else {
                    console.log(good);
                }
            }, 2000)

        })

    }
})
