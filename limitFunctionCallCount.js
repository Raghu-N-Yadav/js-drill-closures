function limitFunctionCallCount(cb, n){
    let limit = 0;
    return function invokeCb() {
        if(limit < n){
            limit++;
            return cb();
        }else {
            //console.log('limit exceeds')
            return null;
        }
    }
}

module.exports = limitFunctionCallCount;
// const check = limitFunctionCallCount(cb,2);

// function cb() {
//     return ('hello');
// }

// console.log(check());
// console.log(check());
// console.log(check());