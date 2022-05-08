'use strict'

// 자바스크립트는 동기적이다
// 호이스팅이란 바 펑션 등이 자동적으로 제일 위로 올라가는것 
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 비동기 언제 코드가 실행될지 알 수 없는 것 
// 셋타임아웃 + 콜백함수 사용해서 1 3 2 로 출력되게 함 

// 콜백 
// synchronous callback 동기적 콜백 
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));


// asynchronous callback 비동기적 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// 콜백 지옥 예제

class UserStorage{
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'semi' && password === 'mi') ||
                (id === 'bomi' && password === 'bin')
            ) {
                onSuccess (id);
            }   else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'semi') {
                onSuccess({name : 'semi', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        }. 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter tour password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.neme}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        ) ;
    } 
);
/*  콜백체인의 문제점 
읽기가 거북함 가독성이 떨어짐 
