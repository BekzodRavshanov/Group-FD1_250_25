// So'zlardan iborat array berilgan bo'lsin. So'zlarning ichidan funksiya parametri' +
// ' sifatida berilgan so'zni bor yoki yo'qligi aniqlansin.
// Array : ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"]



let arr=["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"]

function wordList(word){
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return arr[i] + " so'zi arrayda mavjud"
        }
    }
    return arr + " so'z mavjud emas"
}

console.log(wordList("xalq"))