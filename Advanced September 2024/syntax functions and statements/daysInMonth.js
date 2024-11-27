function daysInAMonth(month,year){


// let daysValueStart = Date.parse(`'${year}-${month}-01'`)
// let daysValueEnd = Date.parse(`'${year}-${month+1}-01'`)

// // console.log(daysValueStart);
// // console.log(daysValueEnd);
// let days = (daysValueEnd-daysValueStart)/(1000*86400);

let date = Date.prototype.getDate()
    console.log(date)

};
daysInAMonth(2, 2021)