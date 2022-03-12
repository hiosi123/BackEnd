// javascript is synchronous. 
// execute the code block by order after hoisting
// hoisting: var, function declaration. 함수 선언들이 자동적으로 제일 위로 올라가는것이 호이스팅

console.log('1');
setTimeout(()=> {
    console.log('hello')
},3000)

console.log('2');
console.log('3');

//Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}

printWithDelay(()=> console.log('async callback'), 2000);

//callback hell exaple

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if((id=== 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'))
            }
        },1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole=> {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            }, 
            error => {
                console.log(error);
            }
        );
    },
    error =>{console.log(error)},
);