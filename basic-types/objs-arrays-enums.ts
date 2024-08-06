// // const person: {
// //   name: string;
// //   age: number;
// // } = {
// // const person: {
// //   name: string; // string
// //   age: number; // int
// //   hobbies: string[]; // array
// //   role: [number, string]; // tuple type
// // } = {
// //   name: 'Sejin',
// //   age: 23,
// //   hobbies: ['Sports', 'Cooking'],
// //   role: [2, 'author']
// // };

// // const ADMIN = 0;
// // const READ_ONLY = 1;
// // const AUTHOR = 2
// // => ENUM can make it easier !!

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }; // 0, 1, 2이 기본이지만 숫자나 문자를 지정해서 assign해줄 수도 있음 

// const person = {
//   name: 'Sejin',
//   age: 23,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN
// };


// // person.role = [0, 'admin', 'user']; // 값을 2개만 허용했으므로 오류 발생
// // person.role.push('admin'); // 여기서는 오류가 나지 않는 이유?: push는 튜플에서 예외적으로 허용
// // person.role[1] = 10; // 2번째 value로 string이 들어오지 않았기 때문에 오류 발생


// let favoriteActivites: string[];
// favoriteActivites = ['Sports'];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // !!! ERROR !!!
// }

// if (person.role === Role.AUTHOR) {
//   console.log('is admin');
// }