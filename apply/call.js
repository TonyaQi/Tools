Function.prototype.call = function(ctx, ...arg) {
    ctx.fn = this;
    return ctx.fn(...arg);
}