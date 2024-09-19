// const userName = 'Sejin';
// // userName  = 'SejinPark';
// let age = 23;

// age = 22; 

// function add(a:number, b:number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   var isOld = true;
// }

// console.log(isOld); // var이 for문 내부에 있기 때문에 에러 발생

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cookingnpm'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumber = add(5, 10, 2, 3.7);
console.log(addedNumber);

const [hobby1, hobby2, ...remainingHobbies] = hobbies; 

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
