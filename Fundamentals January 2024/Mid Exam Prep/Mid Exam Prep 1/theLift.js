function lift(input){

let passengers = Number(input[0]);

let lift = input[1];
lift = lift.split(" ")
console.log(passengers,lift)
let test =0



for(i = passengers ; i > 0 ; i--){
    if(passengers = 0){
                break;
    }
    // console.log(i)
    for (i=0; i<lift.length; i++){
        console.log(lift[i])
        console.log(passengers)
    } 
}
        
console.log("-------------")
console.log(lift)
}
lift(["15","0 0 0 0 0"])