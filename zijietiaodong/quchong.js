let a = [1,1,2,2];
const fn1 = (arr) => {
    return Array.from(new Set(arr));
};

fn1(a);

let m = {};
for(let i = 0; i < a.length;i++) {
    m[a] = 1;
}

Object.keys(m);