// unknown: 어떤 타입을 지정할지 모르겠을 때 사용. 
var userInput; // unknown: 어떤 변수를 넣어도 오류가 나지 않음
var userName;
userInput = 5;
userInput = 'Sejin';
if (typeof userInput === 'string') { // type check를 통해 오류 해결
    userName = userInput;
}
// userName = userInput; // unknown을 string으로 할당 불가. 오류!! any로 변경 시 오류 해결
// unknown이 any보다 더 엄격함
// never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured!', 500);
console.log(result);
