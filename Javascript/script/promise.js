// Promise is a JavaScript object for asynchronous operation
// state: pending -> fulfilled or rejected
// producer vs consumer

// 1. Producer
// when new promise is created, the executor runs automatically,
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something..');
    setTimeout(() =>{
        //resolve('ellie');
        reject(new Error('no network'))
    },2000)


})

// 2. Consumers: then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })


// 3. Promise chaining


const fetchNumber  = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num *2)
    .then(num => num *3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num-1), 1000);
        })
    })
    .then(num => console.log(num));

// 4. Error Handling

const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('π'), 1000);
    })
const getEgg = hen =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => π₯°`), 1000);
        setTimeout(() => reject(new Error (`error! ${hen} => π`)),1000);
    })
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => π`), 1000);
    })

getHen()
    .then(hen => getEgg(hen)) //μ¬κΈ°μ λ°μν μλ¬λ λ€μ μΌμΉλ‘ μ²λ¦¬ ν  μ μλ€.
    .catch(error => {
        return 'π'
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);


// 5. 