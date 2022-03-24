// function parent () {
//     this.fName = 'p'
// }

// function children () {
//     // call 的时候就把parent中的语句执行一遍，执行this.fname = 时 ，children也有了
//     parent.call(this);
//     this.lName = 'c'
// }

// // 继承父函数的方法
// children.prototype = new parent();


//es5 继承
const parent = () => {
    // some
}

const child = () => {
    parent.call(this);
}

child.prototype = new Parent()
child.prototype.constructor = child;// 将实例的原型上的构造函数指定为当前子类的构造函数 (因为上一步丢了)

// es6

class Parent {
    constructor(props) {
        this.name = props.name
    }
    
    say(){
        console.log(this.name)
    }
}

class Bird extends Parent {
    constructor(props){ 
        super(props); // 获得父亲元素的this指向
    }
}