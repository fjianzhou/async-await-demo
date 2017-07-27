var moment=require('moment');


var day = moment("1995-12-25");

console.log(day);

var day =moment("12-25-1995", "MM-DD-YYYY");
console.log(day);

console.log(moment("123", "hmm").format("HH:mm") === "01:23")
console.log(moment("1233", "hmm").format("HH:mm") === "01:23")