'user strict'

// json
// javascript object notation

// 1. object to json 제이슨으로 변환 
// stringify
let json = JSON.stringify(true);
console.log (json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'mimi',
    color: 'pink',
    size: null,
    birthDate: new Date (),
    jump: () => {
        console.log(`${name} can jump!`)
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]); // 원하는 프로퍼티만 
console.log(json); 

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'bomi':value;
});
console.log(json); // 세밀하게 관리하고싶을땐 콜백함수 사용 

// 2. json to object 
//parse(json)
console.clear();
json =JSON.stringify(rabbit);
const obj = JSON.parse(json, (key,vlaue) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date (value) : value ;
});
console.log(obj);
rabbit.jump();

// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log (obj.birthDate.getDate());
