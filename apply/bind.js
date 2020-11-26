const obj = {
    name: 'xx'
}

const test = function () {
    console.log(this.name);
}

Function.prototype.myBind = function(ctx, ...arg1) {

    ctx.fn = this;

    return function(...arg) {
        return ctx.fn(...arg, ...arg1)
    };
}

let f1 = test.bind(obj);

f1();
