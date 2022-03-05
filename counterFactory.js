function counterFactory() {
    let counter = 0;
    return {
        increment : () => {
            counter ++
            return counter;
        },
        decrement : () => {
            counter --
            return counter;
        },
        counter
    }
}

module.exports = counterFactory;
// let {increment, decrement,counter} = counterFactory();

// console.log(increment());
// counter++
// console.log(counter);
// console.log(valCounter++)
//console.log(decrement());
//console.log(counter);