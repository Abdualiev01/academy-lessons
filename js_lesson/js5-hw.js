const Vasya = {
    name: 'Vasya',
    cash: 1000,
    currensy: 'TJS'
};

const Ivan = {
    name: 'Ivan',
    cash: 150,
    currensy: 'TJS'
};

const Anton = {
    name: 'Anton',
    cash: 230,
    currensy: 'TJS'
};

const Jony = {
    name: 'Jony',
    cash: 1234,
    currensy: 'USD'
};

const Max = {
    name: 'Max',
    cash: 333,
    currensy: 'USD'
};
const John = {
    name: 'John',
    cash: 780,
    currensy: 'USD'
};
const Umed = {
    name: 'Umed',
    cash: 280,
    currensy: 'TJS'
};


let personsArr = [];

personsArr.push(Vasya, Ivan, Anton, Jony, Max, John, Umed);



// let rich = 500;
// let richMens = [];

// for (let j = 0; j < personsArr.length; j++) {
//     if (personsArr[j].cash > rich) {
//         richMens.push(personsArr[j]);
//     }

// }
// console.log(richMens);



// sum1 = 0;

// for (let i = 0; i < richMens.length; i++) {
//     sum1 += richMens[i].cash;
// }
// console.log(sum1);

for (let x = 0; x < personsArr.length; x++) {
    if (personsArr[x].currensy === 'USD') {
        personsArr[x].cash *= 10.20;
        personsArr[x].currensy = 'TJS';
    }
    
}
console.log(personsArr);

sum2 = 0;

for (let i = 0; i < personsArr.length; i++) {
    sum2 += personsArr[i].cash;
}

console.log(sum2);







