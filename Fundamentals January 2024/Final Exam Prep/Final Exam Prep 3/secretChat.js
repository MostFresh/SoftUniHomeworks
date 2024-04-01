function secretChat(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== "Reveal") {

        let components = command.split(':|:');
        let action = components.shift();

        if (action === "InsertSpace") {

            let index = components[0]
            message = message.substring(0, index) + " " + message.substring(index)
            console.log(message);

        } else if (action === "Reverse") {

            let subToReverse = components[0];
            if (message.includes(subToReverse)) {
                reversedSub = subToReverse.split("").reverse().join("")
                message = message.replace(subToReverse, reversedSub, 1)
                console.log(message);

            } else {

                console.log("error");
            }
        } else if (action === "ChangeAll") {
            let subStrToReplace = components[0];
            let replacementStr = components[1];
            const pattern = new RegExp(subStrToReplace, "g");
            message = message.replace(pattern, replacementStr);

            // message = message.replaceAll(subStrToReplace, replacementStr);
            console.log(message);
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${message}`)

}
secretChat([

    'Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal'

]);