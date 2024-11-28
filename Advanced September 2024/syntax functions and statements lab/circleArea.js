function circleArea(input){

    let radius = input;
    let isItReallyRadius = typeof(radius);
    let area = 0
    
    if(isItReallyRadius === "number"){
        area = Math.pow(radius,2) * Math.PI
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${isItReallyRadius}.`)
    }
};
circleArea(5)