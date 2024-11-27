function sumOfNumbers(a,b){
let num1 = Number(a);
let num2 = Number(b);
let sum = 0;

for(i=num1; i<=num2; i++){
    sum += i;
}

return sum;
};

sumOfNumbers('1', '5' )