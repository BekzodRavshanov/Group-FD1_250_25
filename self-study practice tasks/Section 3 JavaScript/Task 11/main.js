// let arr = [23,42,12,64,43,22]
//
// let toq = []
// let juft = []
//
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] % 2 ===0 ){
//         juft.push(arr[i])
//     }else{
//         toq.push(arr[i])
//     }
// }
// console.log(toq.length + " tasi toq sonlar ",juft.length + " tasi juft sonlar")


let arr = [12,65,56,23,676,234,123,12324,545,3432,642,]

let a= []
let b = []

for(let i=0; i<arr.length; i++){
    if(arr[i] % 4 === 0){
        a.push(arr[i])
    }else{
        b.push(arr[i])
    }
}
console.log(a.length + " tasi 4 soniga bo'linadi", b.length + " tasi 4 soniga bo'linmaydi")