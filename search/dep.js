let a = {
    b: {
        c: {
            d: 1
        }
    },
    e: 3
}

const dfs = (org) => {
    if(typeof org !== 'object') {
        return org;
    }
    let newO = {};
    let keys = Object.keys(org);

    for(let i = 0; i < keys.length; i++) {
        newO[keys[i]] = dfs(org[keys[i]]);
    }

    return newO;
};


const newObj = dfs(a);

console.log(newObj);