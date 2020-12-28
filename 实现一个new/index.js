let a = myNew(AC, 'a', 'b');

let myNew = (fn, ...args) => {
    let obj = {};
    obj._proto_ = fn.prototype;
    let res = fn.apply(obj, args);
    return res;
}