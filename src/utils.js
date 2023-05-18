const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const arrayRandElement = (mass) => {
    const randElem = Math.floor(Math.random() * mass.length);
    return mass[randElem];
};

export {getRandomNumber, arrayRandElement};
