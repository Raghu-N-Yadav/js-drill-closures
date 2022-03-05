const cacheFunction = require('../cacheFunction');

//callback function
function callback() {
    let num = Math.floor(Math.random()*100);
    return num;
}

//calling cacheFunc with cb
let test = cacheFunction(callback);

let output1, output2;

//calling invokeCb with first argument
output1 = test('first');

//calling invokeCb with same argument
output2 = test('first');

//calling invokeCb with 2nd argument
//console.log(test('sec'));

//testing output
if(output1 === output2){
    console.log('Code is running');
}else {
    console.log('There is some issue');
}
