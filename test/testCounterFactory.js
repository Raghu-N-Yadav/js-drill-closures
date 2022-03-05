const counterFactory = require("../counterFactory");

//destructuring received object
let {increment, decrement , counter = 'No value'} = counterFactory();

let output1, output2,expected1,expected2

//calling function increment
output1 = increment();
//increasing counter value
expected1 = counter+=1;

//calling function decrement
output2 = decrement();
//decreasing counter value
expected2 = counter-=1;

//testing
if(output1 === expected1 && output2 === expected2){
    console.log('Code is running');
}else {
    console.log('There is some issue');
}
