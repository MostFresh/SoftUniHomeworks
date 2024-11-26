function encription(input){

    let entries = input.shift();
    const pattern = /([\S]+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3,})\<\1/;
    const filterPattern = /(?<gr1>[0-9]{3})\|(?<gr2>[a-z]{3})\|(?<gr3>[A-Z]{3})\|(?<gr4>[^<>]{3,})/gm

    for (i=0; i < entries; i++){

        let currentEntry = input[i];
        
        if (pattern.test(currentEntry)){
           
           let encriptedString = currentEntry.match(filterPattern);
       
        let newStr = encriptedString.join("")
        let newStrAsArr = newStr.split("|")
        encriptedString = newStrAsArr.join("");
        console.log(`Password: ${encriptedString}`)

        
            
        }else{
            console.log("Try another password!")
            
        }
    }
}
encription(["5", 

"aa>111|mqu|BAU|mqu<aa", 

"()>111!aaa!AAA!^&*<()", 

"o>088|abc|AAA|***<o", 

"asd>asd|asd|ASD|asd<asd", 

"*>088|zzzz|ZzZ|123<*"]);