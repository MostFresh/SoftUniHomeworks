function degustationParty(input){

    let command = input.shift();
    let guests = [];
    let dislikedMeals = 0;

    while(command != "Stop"){
        
        command = command.split("-");
        let action = command.shift();
        let person = command[0];
        let meal = command[1];

        let personIshere = guests.find(e => e.name === person);
        let idx = guests.indexOf(personIshere);
        
        if(action === "Like"){
            if(personIshere){
                if(!guests[idx].meals.includes(meal))
                guests[idx].meals +=(`, ${meal}`)
            }else{
                person = { name: person, meals: meal };
                guests.push(person);
            }
        }else{
            if(!personIshere){
                console.log(`${person} is not at the party.`)
            }else{
                if(guests[idx].meals.includes(meal)){
                    dislikedMeals ++;
                    console.log(`${person} doesn't like the ${meal}.`)
                    guests[idx].meals -=(`, ${meal}`)
                    if(isNaN(guests[idx].meals)){
                        guests.splice(idx,1);
                    }
                    person = { name: person, meals: "" };
                    guests.push(person);
                }else {
                    console.log(`${person} doesn't have the ${meal} in his/her collection.`)
                }
            }
        }
        command = input.shift();
    }
    guests.forEach(e=>console.log(`${e.name}: ${e.meals}`));
    console.log(`Unliked meals: ${dislikedMeals}`)

}
degustationParty(["Like-Krisi-shrimps", 

"Dislike-Vili-carp", 

"Dislike-Krisi-salad", 

"Stop"]);