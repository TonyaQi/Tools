// 原型链式继承
function Animal (name) {
    this.name = name;
    this.say = function() {console.log('mynameus' + name)};
}

Animal.prototype.eat = function(food) {
    console.log(food);
}

function Cat(name) {

}

Cat.prototype = new Animal('cat');
var car = new Cat();

//  构造函数call 继承
function Animal (name) {
    this.name = name;
    this.say = function() {console.log('mynameus' + name)};
}

Animal.prototype.eat = function(food) {
    console.log(food);
}


function Cat(name) {
    Animal.call(this, name);
}

var cat = new Cat('mm');

// 实例继承
function Cat(name) {
    const o = new Animal();
    o.name = name;
    return o;
}

// 组合继承

function Cat(name, age) {
    Animal.call(name);
    this.age = age;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;


class A {
    constructor(name) {
        this.name = name;
    }
}

class B extends A {
    constructor(name) {
        super(name);
    }
}