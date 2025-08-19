let mydate= new Date(); // Current date and time
console.log(mydate); // Displays the current date and time 2025-08-17T13:51:48.282Z
console.log(mydate.toString()); // Converts the date to a string representation Sun Aug 17 2025 19:21:48 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); // Displays the date in a human-readable format Sun Aug 17 2025
console.log(mydate.toTimeString()); // Displays the time in a human-readable format 19:21:48 GMT+0530 (India Standard Time)
console.log(mydate.toISOString()); // Converts the date to ISO format 2025-08-17T13:51:48.282Z
console.log(mydate.toLocaleString()); // Converts the date to a locale-specific string 8/17/2025, 7:21:48 PM
console.log(typeof mydate); // Displays the type of the date object, object


let myCreatedDate = new Date(2023, 0 ,23) //months are 0-indexed (0 for January, 1 for February, etc.)
console.log(myCreatedDate.toDateString()); // Displays the date object as Mon Jan 23 2023


let myCreatedDatetime = new Date(2023, 0 ,23,5,3)
console.log(myCreatedDatetime.toLocaleString()); // Displays the date and time as 1/23/2023, 5:03:00 AM


let newdate= new Date("2023-01-23");  //its january 23, 2023
console.log(newdate.toDateString()); // Displays the date as Mon Jan 23 2023



let mytimestamp = Date.now();
console.log(mytimestamp); //miliseconds from the date 1st jan 1970 till today
