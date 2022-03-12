// HTTP   client => request and respond => server

//AJAX asynchronous Javascript And XML 동적으로 서버에게 request 를 주고 받을수 있음
//fetch() API - newest but does not work on internet explorer

// XML - 데이터를 표현할 수 있는 한가지 방법, 많이 사용되지 않음, 가독성도 안좋고 공간도 많이 필요함
// JSON - 요즘 활발이 쓰이는 데이터 표현 하는 방법, ECMAScript 3rd 1999 - key, value 로 이루어져 있음 
//  - simplest data interchange format 
//  - lightweight text-based structure
//  - easy to read 
//  - key-value paris
//  - can be used to any platform and programming langugage

// object => serialize => JSON,  JSON => deserialize => object

// 1. Object to JSOn
// stringfy(obj) 
let json = JSON.stringify(true)
console.log(json);

json = JSON.stringify(['apple','banna']);
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json  = JSON.stringify(rabbit, ["name",'color', 'size']);
console.log(json);


// json = JSON.stringify(rabbit, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return key === 'name' ? 'ellie' : value;
// })



// 2. stringify
// parse(json)

console.clear()

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate'? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump() - TypeError 데이터들만 넘어갔다가 돌아와서 점프라는 기능이 없음

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate()); // birthDate 는 스트링으로 할당 되어서 돌아왔기때문에 getDate 를 바로 못씀

// JSON diff.com
// JSON Beautifier
// JSON Parser
// JSON validator
