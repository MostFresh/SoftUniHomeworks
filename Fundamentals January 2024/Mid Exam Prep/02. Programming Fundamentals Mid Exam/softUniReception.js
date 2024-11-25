function reception(input){
    
    let w1=Number(input.shift());
    let w2=Number(input.shift());
    let w3=Number(input.shift());
    let students = Number(input.shift());
    let hours = 0;
    let thirdhourcounter =0;

    
    while (students >0){
        if(students > 0){
            students -= (w1+w2+w3);
            hours++;
            thirdhourcounter++;
        }
        if(thirdhourcounter == 3 && students !=0 ){
            hours++;
            thirdhourcounter = 0;
        }
    }

    console.log(`Time needed: ${hours}h.`)


}
reception(['1','1','1','9']  )