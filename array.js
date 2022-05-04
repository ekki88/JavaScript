'user strict'

//array
// 1. declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ['ㄱ', 'ㄴ']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0])
console.log(fruits[fruits.length - 1 ]);
// 순서를 뜻함 첫번째 0부터 시작
// 마지막 앞부분 

// 3. looping over an array
// for
for (let i = 0; i< fruits.length; i++) {
    console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
        console.log(fruits);
}

// forEach
/* fruits.forEach(function (fruit, index, array) {
        console.log(fruit, index, array);
}); */
fruits.forEach ((fruit, index) => comsole.log(fruit, index));

// 4. addtion, deletion, copy
// 아이템을 제일 뒤에 넣고싶어요
//push
fruits.push('ㄷ','ㄹ');
console.log(fruits);
//pop 뺴고싶을때
fruits.pop();
console.log(fruits);


// unshift 앞에서부터 넣고싶어요
fruits.unshift('ㅎ');
console.log(fruits);
// shift 앞에서부터 빼고싶음
fruits.shift();
console.log(fruits);
// unshift,shift 느림 

// spilce 어디서부터 몇개 지우고싶은지 하나만 지정하면 시작하는부분에서 다지움 
fruits.push('ㅁ','ㅂ');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'ㅍ', 'ㅇ');
console.log(fruits);

// combine two array
const fruits2 = ['ㅏ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. searching 검사 검색 몇번쨰에 있는지 알고싶을때
console.clear();
console.log(fruits);
console.log(fruits.indexOf('ㄱ')); // 있으면 해당위치 없으면 -1
console.log(frutis.includes('v')); // 있으면 true 없으면 flase
// lastIndexOf 가장 마지막부터 검색 


