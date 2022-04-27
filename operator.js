//1. string concarenation
console.log ('my' + 'cat');
console.log ('1'+ 2);
console.log (`string literals:1 + 2 = ${1+2}`);

// 2. numeric operators
console.log(1 + 1); 
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

//3. increment and decrement operators
let counter = 2;
const preIncrement =++counter;
// 2먼저 출력하고 1 더함 그리고 변수에 할당
// counter = counter + 1; 같은 의미
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) ;
const postIncrement = counter++;
// 먼저 변수의 값을 포스트에 할당하고 그다음 1 더함
// postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`) ;

//4. assignment operators 할당연산자
let x = 3;
let y = 6;
x += y; // x = x+ y; 뜻임 자주 이렇게 사용 

//5. comparison operators 비교연산자
console.log(10 < 6); //작거나
console.log(10 <= 6); //작거나 같거나
console.log(10 > 6); //크거나
console.log(10 >= 6); //크거나 같거나

//6. logical operators 
// \\ (or), && (and), ! (not)

// \\ (or), finds the first truthy value 
// 제일 먼저 true 잡으면 그걸로 끝 , 무거운연산자일수록 뒤에 
console.log(`or: &{valuel || valuel || check()}`) ;

// && (and), finds the first falsy value
// 제일 먼전 falsy 잡으면 그걸로 끝, 무거운 연산자일수록 뒤에
console.log(`and: &{valuel || valuel || check()}`) ;

// ! (not) 값을 반대로 바꿔줌 
console.log (!value1);

// 7. equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 값과 타입 둘다 확인 대체로 === 사용하자
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

