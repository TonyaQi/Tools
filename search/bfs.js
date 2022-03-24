let a = {
    b: {
        c: {
            d: 1
        }
    },
    e: 3
}


const bfs = (org) => {
    let ans = {}
    let que = []
    for(let item in org) {
        que.push(item);
    }

    while(que.length) {
        const item = que[0];
        ans[Object.keys(item)[0]] = typeof item[Object.keys(item)[0]] !== 'object' ? item[Object.keys(item)[0]] : {}
        que.push(item[Object.keys(item)[0]]);
    }
};


console.log(bfs(a));