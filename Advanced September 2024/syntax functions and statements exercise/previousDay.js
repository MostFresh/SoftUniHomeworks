function previousDay(year, month, day){

    let inputday = new Date(year,(month-1),day)
    inputday.setDate(inputday.getDate()-1);

    let dayYear = inputday.getFullYear();
    let dayMonth = inputday.getMonth() +1;
    let dayDay = inputday.getDate();

    let expression = `${dayYear}-${dayMonth}-${dayDay}`

    console.log(expression)

};

// function previousDay(year, month, day) {
//     // Create a Date object with the given parameters
//     let date = new Date(year, month - 1, day);
    
//     // Subtract one day (in milliseconds)
//     date.setDate(date.getDate() - 1);
    
//     // Extract the year, month, and day from the new date
//     let prevYear = date.getFullYear();
//     let prevMonth = date.getMonth() + 1; // Months are zero-indexed
//     let prevDay = date.getDate();
    
//     // Format the date as {year}-{month}-{day}
//     console.log(`${prevYear}-${prevMonth}-${prevDay}`);
// }

// // Example usage
// let year = 2024;
// let month = 3;
// let day = 1;
// console.log(previousDay(year, month, day)); // Output: 2024-2-29

previousDay(2015, 2, 0)
