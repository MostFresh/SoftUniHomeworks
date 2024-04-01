function computerStore(input) {
    let command = input.shift();
    let totalCost = 0;


    while (command != "special" && command != "regular") {

        if (Number(command) < 0) {
            console.log("Invalid price!")
        } else {
            totalCost += Number(command);
        }

        command = input.shift();
    }

    let totalCostWithTax = totalCost * 1.20;

    if (command === "special") {
        totalCostWithTax = totalCostWithTax * 0.90;
    }

    if (totalCost < 1){

        console.log("Invalid order!")
       
    }else{

    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${totalCost.toFixed(2)}$`)
    console.log(`Taxes: ${(totalCost * 0.20).toFixed(2)}$`)
    console.log("-----------")
    console.log(`Total price: ${totalCostWithTax.toFixed(2)}$`)

    }
}
computerStore([

    '1050',

    '200',

    '450',

    '2',

    '18.50',

    '16.86',

    'special'

]) 