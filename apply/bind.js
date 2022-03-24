// const obj = {
//     name: 'xx'
// }

// const test = function () {
//     console.log(this.name);
// }

// Function.prototype.myBind = function(ctx, ...arg1) {

//     ctx.fn = this;

//     return function(...arg) {
//         return ctx.fn(...arg, ...arg1)
//     };
// }

// let f1 = test.bind(obj);

// f1();

// call 是js 早起原生函数
// bind 是es5以后出现的
// Function.prototype.myBind = function(ctx, ...arg){
 
// }


// 原生js实现bind函数
Function.prototype.myBind = function(ctx, ...arg) {
    ctx.fn = this;
    console.log(this);
    // 在传入的ctx上创建一个fn； fn指向当前this;
    // 把bind的参数传入，实际上是在ctx中执行，所以拿到了ctx中的参数值;
    return function(...arg1) {
        ctx.fn(...arg, ...arg1);
    }
};

const obj = {a:1}
const x = function(b) {
    console.log(this.a);
    console.log(b);
}.myBind(obj, 2);
console.log(x());


// call 实现bind
// call 是js 早期原生函数
// bind 是es5以后出现的
Function.prototype.myBind = function(ctx, ...arg) {
    const _this = this;
    return function(...arg1) {
        console.log(_this);
        return _this.call(ctx, ...arg, ...arg1);
    }
}

const obj = {a:1}
const x = function(b) {
    console.log(this.a);
    console.log(b);
}.myBind(obj, 2);
console.log(x());


Function.prototype.bind = (ctx, ...arg) => {
    const _this = this;
    return function (...arg1) {
        ctx.fn = _this;
        return ctx.fn(...arg, ...arg1);
    }
}