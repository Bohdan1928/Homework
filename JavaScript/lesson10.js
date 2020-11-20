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
    callback("Пара закінчилась, Йду в кормушку")

    if (money < 20){
        callback("Вигнали з кормушки.", null)
    } else {
        callback(null ,"Купив котлетку з бульбою,")
    }
}

function lifeInUniver2(time, callback){
    callback("Прийшов на ту довбану пару")

    if(time < 15){
        callback("Правило \" 15 хв\" ніхто не відміняв", null)
        callback("Валимо...", null)
    } else{
        callback(null, "Правило \"15 хв\" не спрацювало, вона прийшла")
    }
}

function shavuha(callback){
    callback("Пара закінчилась, вийшов з того універу")
    callback("Без шавухи нікуди")
}

function repa(metronom, callback){
    callback("Пара закінчилась, вийшов з того універу")
    callback("Без шавухи нікуди")
    callback("Поїв, можна йти на рєпу")

    if(metronom > 120){
        callback(null ,"Метроном є, тому граю файно)))")
    } else{
        callback("Забув метроном, пічально", null)
    }
}

function goHome(num, callback){
    callback("Рєпа закінчилась можна їхати додому")

    if(num === 46){
        callback(null ,"О, є маршрутка, їду додому")
    } else{
        callback("Шкода що нема маршрутки, прийдеться йти пішки", null)
    }
}
function inHome(dz, callback){
        callback("Приїхав додому")


    if (dz === 0){
        callback(null ,"На дз нічого, тому: \"Добраніч, солодких снів\"")
    } else {
        callback("Міша, всьо фігня, давай по-новій", null)
    }
}
life(9,(err, un) =>{
    if(err){
        console.log(err, "Я завалив сесію");
    } else{
        console.log("Сів в маршрутку.", un);
        setTimeout(() => {
            console.log("Я на місці");

            univer(5, (err, good) => {
                setTimeout(()=>{
                    if(err){
                        console.log(err);
                    } else {
                        console.log(good);

                        lifeInUniver(30, (err, good) => {
                            setTimeout(() => {
                                if(err){
                                    console.log(err);
                                } else{
                                    console.log(good, "йду довольний на наступну пару");

                                    lifeInUniver2(20, (err, good)=> {
                                        setTimeout(() =>{
                                            if(err){
                                                console.log(err);
                                            } else{
                                                console.log(good);

                                                repa(121, (err, good) => {
                                                    setTimeout(()=>{
                                                        if(err){
                                                            console.log(err);
                                                        } else{
                                                            console.log(good);

                                                            goHome(46, (err, good) => {
                                                                setTimeout(() =>{

                                                                    if(err){
                                                                        console.log(err);
                                                                    } else{
                                                                        console.log(good);

                                                                        inHome(0, (err, good) => {
                                                                            setTimeout(() =>{
                                                                                if(err){
                                                                                    console.log(err);
                                                                                } else{
                                                                                    console.log(good);
                                                                                }
                                                                            }, 2000)
                                                                        })
                                                                    }
                                                                }, 2000)
                                                            })
                                                        }
                                                    }, 2000)
                                                })

                                            }
                                        }, 2000)
                                    })
                                }
                            }, 2000)
                        })
                    }
                },1000)
            })
        }, 1000)
    }
})
