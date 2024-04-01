function stringGame(input){

    let string = input.shift();
    let command = input.shift();

    while (command != "Done"){
        
        let stuff = command.split(" ");
        let action = stuff.shift();
       
        if (action === "Change"){

            let [stringToReplace, replacementString] = stuff;
            const pattern = new RegExp(stringToReplace, "g");
            string = string.replace(pattern, replacementString);
            console.log(string)

        }else if(action === "Includes"){

            let substringToCheck = stuff[0];
            if(string.includes(substringToCheck)){
                console.log("True");
            }else{
                console.log("False");
            }

        }else if(action === "End"){

            let substringToCheck = stuff[0];
            if(string.endsWith(substringToCheck)){
                console.log("True")
            }else{
                console.log("False");
            }
            
        }else if(action === "Uppercase"){

            string = string.toUpperCase();
            console.log(string);
            
        }else if(action === "FindIndex"){

            let stringToFind = stuff[0];
            let index = string.indexOf(stringToFind);
            //не е тъп да си лесно
            console.log(index);
            
        }else if(action === "Cut"){

            let starIndex = Number(stuff[0]);
            let cutLength = Number(stuff[1]);
            string = string.substring(starIndex,starIndex+cutLength);
            //не е тъп да си лесно 2.0
            console.log(string);
            
        }
        command = input.shift();
    }



}
stringGame(["*S0ftUni is the B3St Plac3**", 

"Change 2 o", 

"Includes best", 

"End is", 

"Uppercase", 

"FindIndex P", 

"Cut 3 7", 

"Done"]);