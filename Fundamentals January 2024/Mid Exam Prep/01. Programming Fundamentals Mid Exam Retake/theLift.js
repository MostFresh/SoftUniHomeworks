function Lifto(input){

    let passengers = Number(input[0]);
    let lift = input[1];
    let maxspace = 4;

    liftArr = lift.split(" ")
    liftArr = liftArr.map((e) => parseInt(e, 0));

    for (let i=0 ; i<liftArr.length; i++){
        // console.log(`lift status ${liftArr}`)
        let cabinspace = (maxspace -liftArr[i]);
        
        if(cabinspace > 0 && passengers > 0){
            if(passengers > cabinspace){

                liftArr[i] +=cabinspace;
                passengers -=cabinspace;

            }else if(0 < passengers < cabinspace){

                cabinspace = passengers
                liftArr[i] += cabinspace;
                passengers -= cabinspace;
            }
        }
        // console.log(`passenger status ${passengers}`)
    }
    lift = liftArr.join(" ");
    let lastIndex = lift.length -1

    if((lift[lastIndex] == maxspace) && passengers == 0){
        console.log(lift)
    }else if(0 < lift[(lastIndex)] < maxspace && passengers == 0){
        console.log(`The lift has empty spots!`);
        console.log(lift)
    }else if(lift[lastIndex] = maxspace && passengers > 0){
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(lift);
    }
}
Lifto(["20","0 2 0"])