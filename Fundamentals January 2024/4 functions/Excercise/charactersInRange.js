function converter(n1,n2){
    let firstConvertedString = n1.charCodeAt(0);
    let secondConvertedString = n2.charCodeAt(0);
    let sortedNum1 = Number(Math.min(firstConvertedString,secondConvertedString));
    let sortedNum2 = Number(Math.max(firstConvertedString,secondConvertedString));
    
    let result = "";
    for (i = (sortedNum1+1); i <= (sortedNum2-1); i++){
    //   console.log(i);
           let symbol =String.fromCharCode(i);
           result += ` ${symbol}`;
    }
    console.log(result)
}

converter('C','#'); 