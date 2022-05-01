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

// 8. conditional operators: if
// if, else if, else
const name = 'bomi';
if (name === 'bomi') {
    console.log ('welcome, bomi!');
}  else if (name === 'coder') {
    console.log ('you are cute') ;
}  else {
    console.log ('unkwnon');
}

// 9.ternary operator: ? if연산자를 더 쉽게 사용
// condition ? valuel : value2; 값을 할당 간단하게 출력할때 사용
console.log(name=== 'bomi'? 'yes' : 'no');

// 10. switch statement
// use gor multiple if checks
// use for enum-like value check
// use for muitiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
    case 'firefox':
        console.log('love ya!');
        break;
        default:
        console.log('go away!');
        break;
}

// 11. loops 반복문
// while loop, while the condition is truthy,
// body code is ececuted
let i = 3;
while (i > 0) {
    console.log(`while; ${I}`);
    i--;
}
// f 나올떄까지 무한대로 반복해서 계속해서 돈다

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// 먼저 블럭을 실행하고 조건이 맞는지 안맞는지 검사 

// for loop, for (begin; condition; step)
// 시작하는 문장 컨디션 어떤 스텝을 밟을건지
for (i =3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0 ; i = i - 2) {
    //inlne variable declaration
    //블럭안에 지역변수 선언해서 작성할수도있음
    console.log(`inline variable for: ${i}`);
}

//break 루프를 완전히 끝내는것
//continue 지금것만 스킵하고 다시 다음으로 넘어감 