let password = Math.random()*5000;
password = parseInt (password);


for (let i = 0 ; i < 5000; i++) {
    if( password === i){
        console.log(i)
    }
}


