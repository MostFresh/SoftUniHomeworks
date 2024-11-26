function jeweler(input) {

    let white = input.shift().split(" ").map(Number);
    let yellow = input.shift().split(" ").map(Number);

    // ....... white & yellow,white & yellow,white & yellow

    let pairs = 0;
    let storage = 0;
    let reqMat = 10;
    let reqPairs = 7

    console.log(white);
    console.log(yellow);

    for (let i = 0; i < white.length; i++) {

        let w = white[i];
        let y = yellow[i];

        if (w + y > reqMat) {
            for (let i = 1; i <= 5; i++) {
                y -= 2;
                if (w + y === reqMat) {
                    pairs++;
                    break;
                } else if (w + y < reqMat) {
                    storage += (w + y);
                    break;
                }
            }
        } else if (w + y === reqMat) {
            pairs++
        } else {
            storage += (w + y);
        }

    }

    if (storage >= reqMat) {
        pairs += Math.floor(storage / reqMat)
    }

    if (pairs >= reqPairs) {
        console.log(`Great success, you created ${pairs} earrings.`)
    } else {
        console.log(`Keep trying, you need ${reqPairs - pairs} more earrings.`)
    }
}
jeweler(['2 7 8 5 1 6 1 7 5', '8 3 2 7 9 4 9 2 3']);
console.log("=====================================");
jeweler(['5 3 2 2 4', '5 5 8 2 6']);
