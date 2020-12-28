
function qsort(arr) {
    const getMiddle = (arr, left, right) => {
        let num = arr[left];
        let i = left;
        let j = right;
        while(i < j) {
            while(arr[j] >= num && i < j) {
                j--;
            }

            arr[i] = arr[j];

            while(arr[i] <= num && i < j) {
                i++;
            }

            arr[j] = arr[i];
        }
        arr[i] = num;
        return i;
    };
    
    const sortFn = (arr, left, right) => {
        if(left < right) {
            const i = getMiddle(arr, left, right);
            sortFn(arr, i + 1, right);
            sortFn(arr, left, i - 1);
        }
    };

    sortFn(arr, 0, arr.length - 1);

    return arr;
};
console.log(qsort([1,3,35, 5,6,2]))
