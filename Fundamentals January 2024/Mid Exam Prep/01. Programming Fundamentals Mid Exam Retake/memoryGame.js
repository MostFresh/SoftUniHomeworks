function memoGame(input){

    let sequence = input.shift();
    let seqArr = sequence.split(" ");
    let moves = 0;
    let newI2 = 0;
    let row = input.shift()
    while (row != "end"){

        row = row.split(" ");
        let i1 = Number(row[0]);
        let i2 = Number(row[1]);
        moves++;

        if(i1 != i2 && 0 <= i1 && i1 < seqArr.length && 0<= i2 && i2 <seqArr.length ){
            let val1 = seqArr[i1];
            let val2 = seqArr[i2];
            if(val1 === val2){
                console.log(`Congrats! You have found matching elements - ${seqArr[i1]}!`)
                seqArr.splice(i1,1);
                newI2 = seqArr.indexOf(val2);
                seqArr.splice(newI2,1);   
            }else{           
                console.log("Try again!")
            }
        }else{
            console.log("Invalid input! Adding additional elements to the board")
            let elementToAdd = `-${moves}a`
            seqArr.splice((seqArr.length/2),0,elementToAdd)
            seqArr.splice((seqArr.length/2),0,elementToAdd)
        }

        if(seqArr.length == 0){
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        row = input.shift();
    }
    
    sequence = seqArr.join(" ");
    if(sequence.length > 0){
    console.log("Sorry you lose :(");
    console.log(sequence);
    }


}
memoGame([ 

    "a 2 4 a 2 4",  
    
    "4 0",  
    
    "0 2", 
    
    "0 1", 
    
    "0 1",  
    
    "end" 
    
    ] );