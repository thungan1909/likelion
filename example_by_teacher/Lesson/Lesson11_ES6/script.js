let fruits = ["Apple", "banana", "orange"];

// console.log(Array.isArray(fruits));

//for Each & using callback
// fruits.forEach((fruit, index) => console.log(fruit, index));

// //ES5
// fruits.forEach( function (fruit, index) {
//     console.log(fruit, index)
// } )

//Why using forEach instead of for
// forEach: tối ưu performance và thời gian hơn so với for

//every(): (boolean) Kiểm tra tất cả phần tử trong mảng có thoả mãn không 
// console.log(
// fruits.every((fruit) => {return fruit === "Apple"}));


//some(): (boolean) Kiểm tra trong mảng có phần tử thoả mãn không
// console.log(
//     fruits.some((fruit) => {return fruit === "Apple"}));

//find()
// console.log(
//     fruits.find((fruit) => fruit === "Apple"));

//filter
// console.log(fruits.filter((fruit) => fruit.length < 6));

//map()
// console.log(fruits.map((fruit) => fruit.length < 6));


// //reduce()

// The final result of running the reducer across all elements of the array is a single value.
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumul, currentValue) => {
//     console.log(currentValue);
//     //console.table(accumul, currentValue);
//     return accumul + currentValue;
//   },
//   initialValue
// );
// console.log(sumWithInitial);

//accul - current - sum
//1-run: 0, 1 - 1
//1, 2 - 3
//3,3- 6
//6,4 - 10


//Exercise 
//Q2: map()
// Function to convert Milte to Km

// const convertMileToKm = (values = []) => {
//     return values.map((value) => value*1.6);
// }
// const KmArray = convertMileToKm([2, 15,30]);
// console.log(KmArray);
// const SumKM = KmArray.reduce((a,b) => a+b , 0);
// console.log(SumKM);


//Q3: filter()
//double  even numbers and compute sum array
// const Arr = [1,2,3,4,5,6];
// const DoubleEvenNumber = Arr.filter((number) => number % 2 === 0).map(x => x * 2 ).reduce((a,b) => a+b,0);
// console.log(DoubleEvenNumber);

// //Q4: 
// const input = ["a", "b", "c", "d", "e", "f"];
// let [a,b,c,...res] = input;
// console.log(res);


//Q9:
const numbers = [1,2,3,4,5,6,7,8,9,10];

//9.1
const OldNumbers = numbers.filter((number) => number % 2 !== 0 );
console.log(OldNumbers);

//9.2 divisbile by 2 or 3
const divisible2Or3 = numbers.filter((number) => ((number % 2 === 0) || (number % 3 === 0)));
console.log(divisible2Or3);

//9.3 divisible 3 and then square those number
const NewArrr = numbers.filter((number) => number%3 === 0).map(x => x*x);
console.log(NewArrr);

//9.4 Sum (square the number divisible 5)
const Sum = numbers.filter((number) => number % 5 === 0).map(x => x * x).reduce((a,b) => a+b, 0);
console.log(Sum);
