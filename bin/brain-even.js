import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
    let randomNumber = getRandomNumber(1, 100);
    console.log('Question: ' + randomNumber);
    let answer = readlineSync.question('Your answer: ')
    if (answer === 'yes' && randomNumber % 2 === 0) {
        console.log('Correct!');
        i = i + 1;
    } else if (answer === 'no' && randomNumber % 2 !== 0) {
        console.log('Correct!');
        i = i + 1;
    } else if (answer === 'yes' && randomNumber % 2 !== 0) {
        console.log('"yes" is wrong answer ;(. Correct answer was "no"');
        console.log("Let's try again, " + name);
        break;
    } else if (answer === 'no' && randomNumber % 2 === 0) {
        console.log('"no" is wrong answer ;(. Correct answer was "yes"');
        console.log("Let's try again, " + name);
        break;
    } else {
        console.log('wrong answer ;(');
        console.log("Let's try again, " + name);
        break;
    }
}
if (i === 3)  {
    console.log(`Congratulations, ${name}!`);
} 