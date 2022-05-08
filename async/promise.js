'use strict'

// 프로미스 
// 비동기적인것을 사용할때 콜백함수 대신 사용하는
// 자바스크립트안에 내장되어있는 오브젝트
// state: pending -> fulfilled or sjected상태
// producer vs consumer  프로듀서정보제공와 컨슈머정보소비의

// 1. producer
// wehn new promise is created, the executor runs automatically
const promise = new Promise ((resolve, reject) => {
    // 무거운 일을 함  (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('bomi')
        reject(new Error('no network'))
    }, 2000);
});
// 프로미스 만드는 순간 바로 네크워크 연결되니까 조심해야함 

// 2. consumer: then, catch, finally
promise
    .then(value =>{
        console.log(value);
    })
//then 프로미스가 정상적으로 잘 수행되어서 마지막으로 리졸브라는 콜백함수를 통해 밸류의 파라미터로 전달
    .catch(error => {
        console.log(error);
    });
// catch 실패했을때 에러를 더 잘 사용..
    .finally(() => {console.log('finally');
    });
// 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 사용하고 싶을때

// 3. promise chainig

// 4. error handling
const getHen = () =>
new Promise ((resolve, reject) => {
    setTimeout(() => resolve ('q'), 1000);
});
const getEgg = hen =>
new promise((resolve, reject) => {
    setTimeout(()=> reject(new Error(`error! ${hen} => w`)), 1000);
});
const cook = egg =>
new Promise ((resolve,reject) => {
    setTimeout(() => resolve(`${egg} => e`), 1000);
});

getHen()
.then (getEgg)
.catch (error =>{
    return 'o';
})
.then(cook)
.then(console.log)
.catch(console.log);

