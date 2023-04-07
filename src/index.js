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

export { correctAnswer, wrongAnswer, endGame, getRandomNumber, arrayRandElement }