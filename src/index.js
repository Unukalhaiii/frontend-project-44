
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
    console.log(`"${w}" is wrong answer ;(. Correct answer was "${c}".`);
    console.log("Let's try again, " + name + "!");
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
        while (n <= b) {
            if (a % n === 0 && b % n === 0) {
                result = n;
            }
            n = n + 1;
        }
    } else if (a < b) {
        while (n <= a) {
            if (a % n === 0 && b % n === 0) {
                result = n;
            }
            n = n + 1;
        }
    }
    return result;
}

const createMassive = (first, step) => {
    let massi = [];
    let n = 0;
    let another = first;
    while (n < 10) {
        massi.push(another);
        another = another + step;
        n = n + 1;
    }
    return massi;
}

const isPrime = (num) => {
    let n = 2;
    while (n < (num / 2 )) {
        if (num % n === 0) {
            return "no";
        }
        n = n + 1;
    }
    return "yes";
} 

const isEven = (num) => {
    if (num % 2 === 0) {
        return "yes";
    } else {
        return "no";
    }
}
export { correctAnswer, wrongAnswer, endGame, getRandomNumber, arrayRandElement, findGcd, createMassive, isPrime, isEven }