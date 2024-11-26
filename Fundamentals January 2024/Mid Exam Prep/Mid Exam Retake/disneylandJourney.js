function journey(input){
    let target = Number(input.shift());
    let time = Number(input);

    let money = 0;

    for (i=1; i<=time; i++){
        
        if(i % 2 !== 0 && i !=1){
            money -= money * 0.16;
            money += target * 0.25;
        }else if( i % 4 === 0){
            money += money * 0.25;
            money += target * 0.25;
        }else{
            money += target * 0.25;
        }
    }

    diff = Math.max(money,target) - Math.min(money,target);
    if(money >= target){
        console.log(`Bravo! You can go to Disneyland and you will have ${diff.toFixed(2)}lv. for souvenirs.`)
    }else{
        console.log(`Sorry. You need ${diff.toFixed(2)}lv. more.`)
    }

}
journey(["1000","4"]);
console.log("------")
journey(["3265","3"]);