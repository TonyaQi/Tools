function fn (arr) {
    let helper = (arr, left, right) => {
        let i = left;
        let j = right;
        let x = arr[i];

        while(i < j) {
            while(arr[j] >= x && i < j) {
                j--;
            }
            arr[i] = arr[j];
            
            while(arr[i] <= x && i < j) {
                i++;
            }
            arr[j] = arr[i]
        }
        arr[i] = x;
        return i;
    };
    let quitSort = (arr, left, right) => {
        if(left < right) {
            let index = helper(arr, left, right);
            quitSort(arr, left, index - 1);
            quitSort(arr, index + 1, right);
        }
    }

    quitSort(arr, 0 ,arr.length - 1);

    return arr;
};


console.log(fn([2,34,5,2,5,7,23]));
