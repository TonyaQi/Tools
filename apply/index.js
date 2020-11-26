const test = function (name) {
    console.log(this.name);
    console.log(name);
}

const obj = {
    name: 'xxx'
};

test.apply(obj, ['yyy']);


Function.prototype.myApply = function(ctx, arg) {
    ctx.fn = this;
    return ctx.fn(arg);
}