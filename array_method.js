let courses = ["FA", "CV", "VP", "OOP", "OS", "DLD", "DS"];
courses.push("DLD");
console.log(courses);

courses.unshift("VP", "ST");
console.log(courses);

console.log(courses[courses.length - 1]);

courses.pop();
console.log(courses);

courses.shift();
console.log(courses);

console.log(courses.includes("Choto"));

let numbers = [1, 7, 9, 8, 1, 4, 0, 6, 1, 7, 5];
let slice_A = courses.slice(5, 8);
console.log(slice_A);
let new_A = courses.concat(numbers);
console.log(new_A);

courses.forEach((e) => {
  console.log(e);
});

let number = [872, 22, 67, 45, 99, 72, 95, 13, 118];
let filtered_A = number.filter(function (e) {
  return e % 2 == 0;
});
console.log(filtered_A);

courses.splice(0, 6, "Choto", "Choha");
console.log(courses);

let num = [1456, 2433, 4563, 8874, 9866, 456, 6785];
let total = num.reduce(function (value, currentValue) {
  return value + currentValue;
}, 0);
console.log(total);

let updated_A = courses.map(function (e) {
  return e + "Pinki";
});
console.log(updated_A);

let total2 = num.reduce(function (value, currentValue) {
  return value + currentValue;
}, -4);
console.log(total2);
