// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. function declaration
// fuction name(param1, param2) {bady,,, return; } 
// 펑션기우드 사용 함수 이름 지정 파라미드 나열 함수안 비즈니스 작성 리턴 
// one function === one thing
// 하나의 함수는 한가지일만 하게 만들어야함 
// naming: doSomething, command, verb
// 동사형태로 지정해야합니다
// e.g. createCarsAndPoint -> createCard, createPoint 
// 간결하게  세분화해서 함수꺠끗하게 만들수 있음
// function is object in JS
// 펑션은 오브젝트임. 
function printHello() {
    console.log('Hello')
}
printHello();

functipn lig (message) {
    console.log(message);
}
log('Hello@')

// 2. parmeters
// premtive parameters: passed by value
// object parameters: passed by reference
function changeName(obg) {
    obg.name = 'bomi'
}
const bomi = { name: 'bomi'};
changeName(bomi)
console.log(bomi);


// 3. default parameters (es6)
function showMessage(message, from = 'unknwon') {
    console.log(`${message} by ${from}`) ;
}
showMessage('HI!') ;


// 4. rest parameters (es6)
function printAll(...args) {
    for (let i =0; i < args.length; i++) {
    }
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('kim','bo','mi') ;
//래스터 파라미터 배열형태로 

// 5. local scope
// 로컬 스코프 밖에서는 안이 보이지않고 안에서만 밖을 볼 수있다 
let globalMessage = 'bomi'; // bomi variable
function printMessage() {
    let message = 'bomi';
    console.log(message); // local variable
    console.log(globalMessage); 
}
printMessage();


// 6. return a value
function sim(a,b) {
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1, 2)}`);


// 7. early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrarade logic...
}

// 1. function expression
const print = function() { //anoymous fuction
    console.log ('print');
};

// 2. callback
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'l love you') {
        printYes() ;
    }   else {
        printNo () ;
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!')
} ;

// named function
const printNo = function print() {
    console.log('no!');
    parseInt();
}
randomQuiz ('wrong', printYes, printNo);
randomQuiz ('love you', printYes, printNo);

// arrow function
// 늘 이름이 없는 함수
function simplePrint() {
    console.log('simplePrint!');
}
// 함수를 간결하게 만들어줌 
const simplePrint = () => console.log ('simplePrint!');
const add = (a, b) => a + b;


