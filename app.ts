// unknown: 어떤 타입을 지정할지 모르겠을 때 사용. 
let userInput: unknown; // unknown: 어떤 변수를 넣어도 오류가 나지 않음
let userName: string;

userInput = 5;
userInput = 'Sejin';
if (typeof userInput === 'string') { // type check를 통해 오류 해결
  userName = userInput;
}

// userName = userInput; // unknown을 string으로 할당 불가. 오류!! any로 변경 시 오류 해결
// unknown이 any보다 더 엄격함

// never: 아무것도 return하지 않는다
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
  // while (true) {}
}


const result = generateError('An error occured!', 500);
console.log(result); // 아무것도 안찍힘