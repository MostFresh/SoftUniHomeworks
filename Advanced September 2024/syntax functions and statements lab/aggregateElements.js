function aggregation(array){

    let sum = 0;
    let wonkySum = 0;
    let concatenation = "";

    for (const element of array){
        sum += element
        wonkySum += (1/element)
        concatenation +=`${element}`
     }

    console.log(sum)
    console.log(wonkySum)
    console.log(concatenation)
};
aggregation([1, 2, 3]);
