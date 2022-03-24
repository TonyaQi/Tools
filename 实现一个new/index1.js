const myNew = (constr, arg) => {
    const obj = new Object();
    constr.call(obj, arg);
    obj._proto_ = constr.prototype;
    return obj;
};


function X (b) {
    this.a = 1;
    this.b = b;
    var c = 1;
    this.say = () => {console.log(c)};
}

class A {
    constructor(b){
        this.a = 1;
        this.b = b
        var c = 3;
        this.say = () => {console.log(c)}
    }

    wang() {
        console.log(this.b);
    }
}

const x = new A(2);
const xx = myNew(A, 2)