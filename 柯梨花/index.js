// // 基本实现
function fn() {
    let arr = Array.from(arguments);

    const x = function() {
        arr = arr.concat(Array.from(arguments))
        return fn(arr.reduce((sum, cur) => sum + cur), 0);
    }
    x.toString = () => {
        return arguments[0];
    }

    return x;
}

alert(fn(1)(2)(3))

// // my科利华
// // 先实现一个add
// function add (...arg){
//     return arg.reduce((sum, cur) => sum+cur, 0);
// }

// function curry(fn) {

//     let tmp = function() {
//         let arg = Array.from(arguments);
//         let x = function() {
//             arg = arg.concat(Array.from(arguments));

//             return tmp(fn(...arg));
//         }
//         x.toString = () => {
//             return arguments[0]
//         }
//         return x;
//     };

//     return tmp
// };

// const curryAdd = curry(add);

// console.log(curryAdd(1,2)(3).toString())

// baidu上



function fn(a,b,c) {
    return a + b + c;
}

function curry(fn) {
    return (...args) => {
        if(args.length === fn.length) return fn(...args);
        console.log(args, fn.length, fn);

        return curry(fn.bind(this, ...args));
    }
}

const curry_fn = curry(fn);

console.log(curry_fn(1)(2)(3));


// 从闭包到柯理化
// 一次只能传入一个
const sum = (...arg) => {
    let ans = [...arg].reduce((arr, cur) => arr+cur, 0); // 先把第一个值存下来
    const fun = (...arg2) => { // 内存函数 能够将第二个圆括号累加起来
        ans = ans + [...arg2].reduce((arr, cur) => arr+cur, 0);
        return fun;
    }
    fun.valueOf = () => ans; 
    
    return fun;
};

console.log(+sum(1)(2)(3));