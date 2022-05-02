함수 선언
함수 호출

function 함수이름 (함수의 어떤값을 전달받아올건지 인자) {
    함수안에서 어떤 코드가 작동하는지 
}  

function doSomething() {
    console.log('hello') ;
}

function add(a, b) {
    const sum = a + b ;
    return sum;
}

함수 호출
doSomething() ;
const result = add(1, 2);
console.log(result);
