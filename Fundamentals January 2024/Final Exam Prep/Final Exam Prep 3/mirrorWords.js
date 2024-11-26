function mirrorWords(input){
    
    const pattern = /([\@#])(?<firstW>[A-Za-z]{3,})\1\1(?<secondW>[A-Za-z]{3,})\1/gm

    let cycleMethod = pattern.exec(input)
    let paircount = 0;
    let collection = `The mirror words are:\n`;
    let validPairs = 0;

    
    while (cycleMethod){
        let firstW = cycleMethod.groups.firstW;
        let secondW = cycleMethod.groups.secondW;
        let reversedSecondWord = secondW.split("").reverse().join("")
        paircount ++;
        
        if (reversedSecondWord === firstW){
            let mirroedPair = `${firstW} <=> ${secondW}` +", "
            collection += mirroedPair
            validPairs ++;
        }

        cycleMethod = pattern.exec(input);

    }
    
    if (paircount != 0){
        console.log(`${paircount} word pairs found!`)
    }
    if (validPairs==0 && paircount==0){
        console.log("No word pairs found!")
    }
    if (validPairs == 0){
        console.log("No mirror words!");
        
    } else{
        console.log(collection.substring(0,collection.length-2));
    }

}
mirrorWords([ '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'   ] );