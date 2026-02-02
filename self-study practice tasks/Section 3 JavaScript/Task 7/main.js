let arr = [(Math.floor(Math.random()*100)),(Math.floor(Math.random()*100))];

if (arr[0] % 2 === 0) {
    arr.unshift(9);
}else {
    arr.unshift(6);
}
console.log(arr)

