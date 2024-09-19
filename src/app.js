// const userName = 'Sejin';
// // userName  = 'SejinPark';
// let age = 23;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var hobbies = ['Sports', 'Cookingnpm'];
var activeHobbies = __spreadArray(['Hiking'], hobbies, true);
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Max',
    age: 30,
};
var copiedPerson = __assign({}, person);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumber = add(5, 10, 2, 3.7);
console.log(addedNumber);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var userName = person.firstName, age = person.age;
console.log(userName, age, person);
