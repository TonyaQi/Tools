let content = [];
let i = 0;
const useState = (init) => {
    const curIndex = i;
    if(!content[curIndex]) content[curIndex] = init;
    const setState = (value) => {
        content[curIndex] = value;
    }
    i++;
    return [content[i], setState];
}