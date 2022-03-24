
const helper = (array, left, right) => {
    if(left >= right) return;
    let l = left, r = right;
    const mid = array[l];

    while(l < r) {
        while(l < r && array[r] >= mid) r--;
        if(l < r) array[l++] = array[r];
        while(l < r && array[l] < mid) l++;
        if(l < r) array[r--] = array[l];
    }

    array[l] = mid;

    helper(array, left, l-1);
    helper(array, l+1, right);

}

const main = (array) => {
    helper(array, 0, array.length - 1);

console.log(array)

}

main([3,4,2,1,5])
