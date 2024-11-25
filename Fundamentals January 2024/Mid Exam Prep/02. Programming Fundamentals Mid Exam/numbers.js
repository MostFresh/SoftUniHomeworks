function numbers(sequence){
   
    // console.log(sequence)
    sequence = sequence.split(" ").map((e) => parseInt(e, 0));;
    // console.log(sequence)
    let sum = 0;
    let highNums = [];
    let strToPrint = [];

    
    for (let e of sequence) {
        sum += e   
    }
    
    let avg = (sum / sequence.length);
    // console.log(sequence,sum,avg)
    
    sequence.forEach(element => {
                if(element > avg){
                    highNums.push(element)
                }
            });
    highNums = highNums.sort((a,b) => b -a)
    // highNums = highNums.toSorted((a,b)=> b - a);
    for (let i = 1; i <= 5; i++){
        if(Number(highNums[i-1])){
            strToPrint.push(highNums[(i-1)]);
        }
    }
    strToPrint = strToPrint.join(" ");
    if(sequence.length <= 1 || highNums.length == 0){
        console.log("No");
    }else{
        console.log(strToPrint);
    }
}
numbers('2 2 2 2 2 2 2 3 2');