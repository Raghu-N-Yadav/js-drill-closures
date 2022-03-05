const limitFunctionCallCount = require("../limitFunctionCallCount");

function callback() {
    return 'hello'
}

let test = limitFunctionCallCount(callback,5);

//testing
function testing(func,n){
    for(let index = 0; index <n+1;index++){
        if(index ===n){
            if(func() !== null){
                console.log('There is some issue');
                break;
            }
        }else {
            if(func() !== 'hello'){
                console.log('There is some issue');
                break;
            }
        }  
    }
    console.log('Code is running');
}

testing(test,5)