function needForSpeed(input){

    let car ={};
    let carCollection = [];
    let maxFuel = 75; 
    let carNumber = input.shift();

    for(i=0; i<carNumber; i++){
        let carAsStr= input.shift(i)
        let [carModel, carMileage, carFuel] = carAsStr.split("|")

        car = { model:carModel, mileage: carMileage, fuel: carFuel };
        carCollection.push(car)
    }

    let command = input.shift();

    while (command != "Stop"){
        
        let row = command.split(" : ");
        let action = row.shift();
        
    
        if( action === "Drive"){   
            let [curModel, curMileage, curFuel] = row

            let result = carCollection.find(e => e.model === curModel)
            let idx = carCollection.indexOf(result);

            if(carCollection[idx].fuel >= curFuel){                
                carCollection[idx].fuel -= Number(curFuel)
                carCollection[idx].mileage = Number(curMileage) + Number(carCollection[idx].mileage)
                console.log(`${curModel} driven for ${curMileage} kilometers. ${curFuel} liters of fuel consumed.`)
            }else{
                console.log("Not enough fuel to make that ride")
            }
            if(carCollection[idx].mileage >= 100000){
                carCollection.splice(idx,1);
                console.log(`Time to sell the ${curModel}!`)
            }

        } else if(action === "Refuel" ){

            let [curModel, fuelToRefil] = row;

            let result = carCollection.find(e => e.model === curModel)
            let idx = carCollection.indexOf(result);
        
            if(carCollection[idx].fuel + Number(fuelToRefil) <= maxFuel){
                carCollection[idx].fuel += Number(fuelToRefil)
                console.log(`${curModel} refueled with ${fuelToRefil} liters`)
            }else{
                let newFuelValue = maxFuel - Number(carCollection[idx].fuel);
                carCollection[idx].fuel = maxFuel;
                console.log(`${curModel} refueled with ${newFuelValue} liters`)
            }
            
        }else if (action === "Revert" ){
            let curModel = row[0];
            let mileageToRevert = Nummber(row[1]);

            let result = carCollection.find(e => e.model === curModel)
            let idx = carCollection.indexOf(result);

            carCollection[idx].mileage = Number(carCollection[idx].mileage) - mileageToRevert;

            if(carCollection[idx].mileage >= 10000){ 
                console.log(`${curModel} mileage decreased by ${mileageToRevert} kilometers`)
            }else{
                carCollection[idx].mileage = 10000;
            }
        }

        command = input.shift();
    }
carCollection.forEach(e=>console.log(`${e.model} -> Mileage: ${e.mileage} kms, Fuel in the tank: ${e.fuel} lt.`));

}
needForSpeed([ 

    '3', 
  
    'Audi A6|38000|62', 
  
    'Mercedes CLS|11000|35', 
  
    'Volkswagen Passat CC|45678|5', 
  
    'Drive : Audi A6 : 543 : 47', 
  
    'Drive : Mercedes CLS : 94 : 11', 
  
    'Drive : Volkswagen Passat CC : 69 : 8', 
  
    'Refuel : Audi A6 : 50', 
  
    'Revert : Mercedes CLS : 500', 
  
    'Revert : Audi A6 : 30000', 
  
    'Stop' 
  
  ]  );