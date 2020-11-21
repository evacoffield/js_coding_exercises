function fizzBuzz(n) {
    const foo = [...Array(n).keys()];
    foo.forEach( i => {
        i++;
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    })

}
fizzBuzz(15);

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    let secondLine = inputString;
    console.log(secondLine);
}
processData("Welcome to 30 Days of Code!");


function simpleArraySum(ar) {
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //return (ar.reduce(reducer));
    return ar.reduce((a, b) => a + b)

}

simpleArraySum([1, 2, 3, 4, 10, 11]);

