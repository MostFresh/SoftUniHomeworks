function math(a,b,operator){
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.

let c = 0;

switch (operator){
    case '+': c = a + b; break;
    case '-': c = a - b; break;
    case '*': c = a * b; break;
    case '/': c = a / b; break;
    case '%': c = a % b; break;
    case '**': c = a ** b; break;
};

console.log(c);
   
};
math(2, 10, '**');