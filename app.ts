function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

let number1: number; // 나중에 변수에 값을 넣을 경우를 위해서만 여기서 타입 지정
number1 = 5; // = 0.5
const number2 = 2.8;
const printResult = true;
let resultPhraes = 'Result is: ';
// resultPhraes = 0; // 불가능

add(number1, number2, printResult, resultPhraes);
