function squareStar(n){

    let param;
    let asterisk = "*"

    if(typeof n == 'undefined'){
        param = 5;
    } else {
        param = n;
    }
    for (j=1; j<param; j++){
        asterisk += ' *'
    }
    for (i=0; i<param; i++){
        console.log(asterisk)
    }
    
}
squareStar(3)