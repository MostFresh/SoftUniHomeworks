function largestNumber(a,b,c){

    let largest = 0;

    if(a>b && a>c){
        largest = a;
    } else if(b>a && b>c){
        largest = b;
    } else if(c>a && c>b){
        largest = c;
    }

    console.log(`The largest number is ${largest}.`);
};
largestNumber(5, -3, 16)