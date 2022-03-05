function cacheFunction(cb) {
    let cacheObj = {};
    return function invokeCb (arg){
        if(cacheObj.arg === undefined){
            cacheObj.arg = cb();
            return cacheObj.arg;
        }else {
            return cacheObj.arg;
        }
    }
}

module.exports = cacheFunction;

