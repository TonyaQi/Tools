// 冒泡、选择、插入
// 快排、堆排、归并

let a = [3,7,6,4,2]
for(let i = 0; i < a.length; i++) {
    for(let j=0; j < a.length; j++) {
        if(a[j] > a[j + 1]) {
            let tmp = a[j];
            a[j] = a[j+1];
            a[j+1] = tmp;
        }
    }
}

let b = [3,2,4,5, 1]
function qsort(arr) {
    if(arr.length <= 1) return arr;
    let tmp = arr[0];
    let left = arr.filter(item => item < tmp);
    let mid = arr.filter(item => item === tmp);
    let right = arr.filter(item => item > tmp);
    return [...qsort(left), ...mid, ...qsort(right)];
}
qsort(b);

