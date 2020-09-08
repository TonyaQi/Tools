const data = [
    {
        id: 1,
        content: 1,
        parentId: 0
    },
    {
        id: 2,
        content: 2,
        parentId: 1
    },
    {
        id: 3,
        content: 3,
        parentId: 1
    },
    {
        id: 4,
        content: 4,
        parentId: 2
    }
]


const arrayToTree = (data) => {
    const map = data.reduce((ans, cur) => {ans[cur.id] = cur; return ans} , {})
    const tree = [];
    data.forEach(item => {
        if(!item.parentId) {tree.push(item); return};
        const parent = map[item.parentId];
        parent.children = parent.children ? parent.children.concat(item) : [item]
    });
};

arrayToTree(data)




