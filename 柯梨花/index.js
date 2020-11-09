// sum(1)(2)(3);

const s = (a) => {
    if('没有函数调用') return a;
    return (b) => {
        return s(a + b);
    }
}

function sum(a){
    let temp = function(b){
        return sum(a+b)
    }
    // temp.toString这里写成temp.valueOf也可以
    temp.toString = function(){
        return a
    }
    return temp
}

console.log(sum(1)(2).toString(), +sum(1)(2))


let curSum = function() {
    let args = [].slice.apply(arguments);

    let fn = function() {
        let last = arguments[arguments.length - 1];
        let args_2 = [].slice.apply(arguments);
        args = args.concat(args_2);
        return fn
    }

    return fn
};

function curry (fn) {
    const finalLen = fn.length
    let args = [].slice.call(this,1)
    console.log(fn)
    return function currying () {
      args = args.concat(Array.from(arguments))
      const len = args.length
      console.log(args);
      return len >= fn.length ? fn.apply(this, args) : currying
    }
  }
  function add (a,b,c) {
    return a+b+c
  }
  const add1 = curry(add)
  console.log(add1(1, 2)(3))