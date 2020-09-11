function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg);
  return arg;
}

const compose = (...fn) => {
    if (fn.length === 0) {
        return args => args;
    }
    if (fn.length === 1) {
        return fn[0];
    }
    return fn.reduce((a, b) => (...arg) => a(b(...arg)));
};

compose(f1, f2, f3)("omg");
