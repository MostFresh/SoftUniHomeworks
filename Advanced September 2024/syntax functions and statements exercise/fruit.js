function fruit(name, grams, pricePerKilo){

    let weight = grams/1000
    let cost = pricePerKilo*weight

    console.log(`I need $${cost.toFixed(2 )} to buy ${weight.toFixed(2)} kilograms ${name}.`)

}
fruit('orange', 2500, 1.80)