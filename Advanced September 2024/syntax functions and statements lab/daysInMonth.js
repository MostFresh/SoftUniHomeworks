function daysInAMonth(month,year){


// let daysValueStart = Date.parse(`'${year}-${month}-01'`)


// let daysValueEnd = Date.parse(`'${year}-${month+1}-01'`)

// // console.log(daysValueStart);
// // console.log(daysValueEnd);
// let days = (daysValueEnd-daysValueStart)/(1000*86400);

let date = new Date(year, month, 0)
    console.log(date.getDate())

};
daysInAMonth(11, 2021)