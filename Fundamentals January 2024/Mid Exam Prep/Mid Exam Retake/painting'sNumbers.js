function paintingQuest(input){

    let quest = input.shift().split(" ").map(Number);

    for (let iterator of input) {
        
        let row = iterator.split(" ");
        let action = row.shift();


        switch (action){
            case "Insert":
                let idxToInsert = Number(row[0]) + 1;
                let valueToInsert = Number(row[1]);

                if (idxToInsert < quest.length && idxToInsert>=0){
                quest.splice(idxToInsert,0, valueToInsert)
                break;
                }
                return;
            case "Change":
                let valueToChange = Number(row[0]);
                let newValue = Number(row[1]);
                let idxToChange = quest.indexOf(valueToChange);
                
                if(idxToChange >=0 && idxToChange < quest.length){
                quest[idxToChange] = newValue;
                }
                break;
            case "Hide":
                let valueToHide = Number(row[0]);
                idxToHide = quest.indexOf(valueToHide);

                if( idxToHide >=0 && idxToHide < quest.length){
                    quest.splice(idxToHide,1)
                }
                break;
            case "Switch":
                let p1 = Number(row[0]);
                let idx1 = quest.indexOf(p1);
                let p2 = Number(row[1]);
                let idx2 = quest.indexOf(p2);

                if( idx1 >=0 && idx1 < quest.length && idx2 > 0 && idx2 < quest.length){
                    quest[idx1] = p2;
                    quest[idx2] = p1;
                }
                break;
            case "Reverse":
                quest = quest.reverse();
                break;
            case "END":
                break;
        }
    }

    console.log(quest.join(" "))
}
paintingQuest(["115 101 114 73 111 116 75","Insert 5 114","Switch 116 73","Hide 76","END"]);
console.log("115 101 114 116 111 73 114 75");
console.log("===========================================");
paintingQuest(["77 120 115 101 97 78 88 112 111 108 110","Switch 97 98","Hide 88","Change 120 117","END"]);
console.log("77 117 115 101 97 78 112 111 108 110 ");
console.log("===========================================");
paintingQuest(["65 304 97 79 12 659","Reverse","Change 73 70","Insert 10 85","END"]);
console.log("659 12 79 97 304 65");