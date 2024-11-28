function sameNumbers(num){

    let n = String(num);
    let sum = 0;
    let truuthy = true;

    for(j=1; j<=n.length; j++){
        if(n[j-1] === n[n.length-1]){
            truuthy = true;
        } else {
            truuthy = false;
            break;
        }
    }
    
    for (i=0; i<n.length; i++){
        sum += Number(n[i]);
    }
    console.log(truuthy)
    console.log(sum)

}
sameNumbers(4442)