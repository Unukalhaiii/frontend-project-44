import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const arrayRandElement = (mass) => {
    let rand = Math.floor(Math.random() * mass.length);
    return mass[rand];
}

const correctAnswer = () => {
    console.log('Correct!');
}

const wrongAnswer = (c, w, name) => {
    console.log(`"${w}" is wrong answer ;(. Correct answer was "${c}"`);
    console.log("Let's try again, " + name);
}

const endGame = (i, name) => {
    if (i === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

const findGcd = (a, b) => {
    let n = 1;
    let result = 0;
    if (a > b) {
        while (n <= Math.ceil(b / 2)) {
            if (a % n === 0 && b % n === 0) {
                result = n;
            }
            n = n + 1;
        }
    } else if (a < b) {
        while (n <= Math.ceil(a / 2)) {
            if (a % n === 0 && b % n === 0) {
                result = n;
            }
            n = n + 1;
        }
    }
    return result;
}

export { correctAnswer, wrongAnswer, endGame, getRandomNumber, arrayRandElement, findGcd }