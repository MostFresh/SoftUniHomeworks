function arrayModifier(input){

    let arr = input.shift().split(" ");
    let row = input.shift().split(" ");
    // console.log(`original array is:${arr}`);
    while (row !="end"){
       
        let action = row.shift();
       
        switch (action){
            case "swap":
                let [i1, i2] = row;
                let valueAti1 = arr[i1];
                arr[i1] = arr[i2];
                arr[i2] = valueAti1;
                // console.log(arr);
                break;
            case "multiply":
                let [id1, id2] = row; 
                let multiplication = arr[id1] * arr[id2];
                arr[id1] = multiplication;
                // console.log(arr);
                break;
            case "decrease":
                for (let element of arr) {
                    arr[arr.indexOf(element)] = element -1
                }
                // console.log(arr);
        }
        row = input.shift().split(" ");
    }

    console.log(arr.join(", "));


}
arrayModifier([ 

    '1 2 3 4', 
  
    'swap 0 1', 
  
    'swap 1 2', 
  
    'swap 2 3', 
  
    'multiply 1 2', 
  
    'decrease', 
  
    'end' 
  
  ] );