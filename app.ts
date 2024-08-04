// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Sejin',
  age: 23,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}