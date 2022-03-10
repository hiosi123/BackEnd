//class =  template, declare once, no data in
//object = 클래스를 이용해서 만들어냄, instance of a class, created many timee, data in

// JavaScript classes
// -  introduced in ES6 
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations 

class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const Simon  = new Person('Simon', 20);
console.log(Simon.name);
console.log(Simon.age);
Simon.speak();

// 2. Getter and Setters

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value <0) {
            throw Error('age can not be negative');
        }
        this._age =value;
    }
}

const user1 = new User('Steve', 'Job', 1);
console.log(user1.age);

// 3.Fields (public, private)

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const Article1 = new Article(1)
const Article2 = new Article(2)
console.log(Article1.publisher); // static 은 class 에 달려있기 때문에 object 로 했을때 못읽음
console.log(Article.publisher);

// 오브젝트와 상관없이 공통적으로 클래스에서 쓰이는 것이라면 메모리를 알낄수 있다.

// 5. 상속과 다양성

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {

    draw() {
        super.draw();
        console.log('triangle');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();

const triangle = new Triangle(20,20,'red');
triangle.draw();

// 6. Class checking: instanceOf

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());