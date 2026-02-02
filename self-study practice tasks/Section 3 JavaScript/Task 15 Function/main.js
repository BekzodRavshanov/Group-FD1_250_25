// Ixtiyoriy sonlar arrayi yaratilsin. Shunday funksiya yaratinki
// shu funksiya parametri sifatida berilgan son
// array ichida bor yoki yo'qligi aniqlasin.





// function INumbers(num){
//     let arr = [43,455,67,123,7,3]
//     for (let i = 0 ; i < arr.length ; i++ ){
//         if(arr[i] === num){
//             console.log(arr[i] + " soni arrayda bor ! ")
//             return arr[i];
//         }
//     }
//     return num + " bu son mavjud emas !"
// }
//
// console.log(INumbers(62))



function INumbers(str){
    let arr = ["car","plane","bike","rocket","yatch","bus"]
    for (let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] === str){
            // console.log(arr[i] + "  arrayda bor va " + i + " - tartibda index da")
            return arr[i] + " arrayda bor "  + i + " - tartibda index da";
        }
    }
    return str + " mavjud emas !"
}

console.log(INumbers("plane"))
