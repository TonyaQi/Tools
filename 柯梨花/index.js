// 基本实现
function fn() {
    let arr = Array.from(arguments);

    const x = function() {
        arr = arr.concat(Array.from(arguments))
        return fn(arr.reduce((sum, cur) => sum + cur), 0);
    }
    x.valueOf = () => {
        return arguments[0];
    }

    return x;
}

console.log(+fn(1)(2)(3))

// my科利华
// 先实现一个add
function add (...arg){
    return arg.reduce((sum, cur) => sum+cur, 0);
}

function curry(fn) {

    let tmp = function() {
        let arg = Array.from(arguments);
        let x = function() {
            arg = arg.concat(Array.from(arguments));

            return tmp(fn(...arg));
        }
        x.toString = () => {
            return arguments[0]
        }
        return x;
    };

    return tmp
};

const curryAdd = curry(add);

console.log(curryAdd(1,2)(3).toString())

// baidu上