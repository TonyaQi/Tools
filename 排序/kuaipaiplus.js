const kuaipai = (arr) => {
    if(!arr.length) return [];
    const tmp = Math.floor(arr.length / 2);
    const left = arr.filter(item => item < arr[tmp]);
    const mid = arr.filter(item => item === arr[tmp]);
    const right = arr.filter(item => item > arr[tmp]);
    return [...kuaipai(left), ...mid, ...kuaipai(right)];
};

kuaipai([2,7,3,7,4,3,5,4,6])