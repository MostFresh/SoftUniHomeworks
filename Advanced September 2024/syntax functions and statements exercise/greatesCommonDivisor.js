function commonDivisor(a,b){

    while (b !== 0){
        let fill = b
        b = a % b;
        a = fill
    }

    console.log(a)
};
commonDivisor(2154, 458)