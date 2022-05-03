// Object
// one of the js date types
// a collection of reated data and/or functionality
// nearly all objects in js are instances of object
// object - { key : value };

// 1. literals anf properties
const obj1 = {}; // 'object literal' syntax
// const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const bomi = {name: 'bomi', age: 6};
print(bomi);

//with js magic
// con add properties later
bomi.hasJob = true;
console.log(bomi.hasJob);

// cna delete properties
delete bomi.hasJob;
console.log(bomi.hasJob);



// 2. computed properties 계산된
// key hould be always string
// 안에 있는 데이터 접근시 닷 사용 괄호 사용해서 스트링형태 접근
console.log(bomi.name);
console.log(bomi['name']);
bomi['hasJob'] = true;
console.log(bomi.hasJob);

//닷을 쓸때 코딩하는 순간 닷을
// 괄호쓸땐 정확하게 어떤 키를 사용할지 모를때

function printValue (obj, key){
    console.log(obj ['key']);
}
printValue(bomi, 'name');
printValue(bomi, 'age');



// 3. property value shorthand
const person1 = {name: 'bomi', age: 28 };
const person2 = {name: 'semi', age: 25 };
const person3 = {name: 'mi', age: 2 };
const person4 = makePerson('mim', 4);
console.log(person4);
function makePerson(name,age) {
    return{
        name,
        age,
    }
}


// 4. constuctor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (ket in obj)
// 해당하는 오브젝트안에 키가 있는지 확인하는 것 
console.log('name' in bomi);
console.log('age' in bomi);
console.log('random' in bomi);
console.log(bomi.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in bomi){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5] ;
for (value of array){
    console.log(value);
}


// 7. fun coding
// object.assign(dest, [obj1,obj2,obj3...])
const user = {name: 'bomi', age: '20'};
const user2 = user;
user2.name = 'semi';
console.log(user);

// 옛날복사법
const user3 = {};
for (ket in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user)
console.log(user4);


// 다른 예
const fruit1 = {color: 'red'};
const fruit2 = {color: 'pink', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
