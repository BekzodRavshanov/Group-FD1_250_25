var a = 9;
var b= Math.random() * 10
b=parseInt (b);

if (b<9){
    console.log(b + "soni 9 sonidan katta")
}
else if (b===9){
   console.log(b + "Qimyatlar o'zaro teng ! " )
}
else {
    console.log(b + "Soni 9 sonidan kichik")
}

//--------------------------------------ARRAYS---------------------------------------
var array = [ 1, 2, 3, 4, 5, 77];
//Hisoblash tartibi: //0, 1, 2, 3, 4, 5
var text = ["Salom", " Dunyo", "Bu js", false];
var car = ["Nexia", "Tico", "Damas"];
var cars = [
    ["Nexia", "Qora", "1600"],
    ["Tico", "oq", "1400"],
    ["Damas", "Oq", "2400"],
];
// car-push ("Mal(bu") ;
// car. pop);
// car.unshift ("Malibu");
// car.shift()
// var carJoin = car join(" / ");
car.splice(2, 0, "Malibu");
// car. splice(a, b, c);
console.log(car);

//----------------------------------------OBJECTS-------------------------------------
 var gm = {carName: "Malibu", color: "0q", poz: [1,2,3], bormi: false}; // {key: value, key2: value2, ....};
             if(gm. bormi) {
                    gm.narx = 4500;
             }else{
                    gm.narx = "Belgilanmgan!";
                    gm.color = "Belgilanmgan!";
             };
    console. log(gm.carName, gm["color"], "Status: " + (gm.bormi ? "Bor!" : "Yo'q"),
        gm.narx) ;
