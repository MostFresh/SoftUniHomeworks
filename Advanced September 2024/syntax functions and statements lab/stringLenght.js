function StringLenght(a,b,c){

    let stingLenght1 = Number(a.length);
    let stingLenght2 = Number(b.length);
    let stingLenght3 = Number(c.length);

    let LenghtSum = stingLenght1 + stingLenght2 + stingLenght3;
    let AverageLenght = Math.floor(LenghtSum/3);

    console.log(LenghtSum);
    console.log(AverageLenght);

}
StringLenght('chocolate', 'ice cream', 'cake')