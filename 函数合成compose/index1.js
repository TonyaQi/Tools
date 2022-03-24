const a = (x) => {console.log(x+1); return x+1};
const b = (x) => {console.log(x+2); return x+2};

const compose = (...fn) => {
    return fn.reduce((lastRefn, curFn) => (v) => {
        return lastRefn(curFn(v));
    });
};

compose(a, b)(1);