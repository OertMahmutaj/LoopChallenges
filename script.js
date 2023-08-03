// print odd numbers function
console.log('Printing odd numbers from 1 to 20: ');
function printOdds() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
};
printOdds()
console.log('Printing Multiples of 3 from 100 to 0: ');
// Decreasing Multiples of 3
function printMultiplesOf3() {
    for(let i = 100; i > 0; i--) {
        if(i % 3 === 0) {
            console.log(i);
        }
    }
};
printMultiplesOf3()
// Print the sequence
console.log('Printing Sequence of 4 to -3.5: ');
function printSequence() {
    for(let i=4; i>-4; i-=1.5) {
        console.log(i);
    }
};
printSequence();
// Sigma
console.log('Printing sum of nubers from 1 to 100: ')
function sigmaSum() {
    var sum = 0;
    for(let i=1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
};
sigmaSum()
// Factorial
console.log('Printing prodcuts of numbers from 1 to 12: ');
function factorialFun() {
    var product = 1;
    for(var i = 1; i <= 12; i++){
        product *= i;
    }
    console.log(product);
};
factorialFun()