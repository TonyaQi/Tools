let obj = {
    a:1,
    b: [1, 2],
    c: {
        x: [{z: [1,2]}]
    }
}

const copy = (tmp) => {
    let ans;
    if(Array.isArray(tmp)) {
        ans = [];
        for(let item of tmp) {
            ans.push(copy(item));
        }
    }
    else if(tmp instanceof Object) {
        ans = {};
        const kes = Object.keys(tmp);
        for(let key of kes) {
            ans[key] = copy(tmp[key]);
        }
    }
    else 
        ans = tmp;

        return ans;
};

const res = copy(obj);