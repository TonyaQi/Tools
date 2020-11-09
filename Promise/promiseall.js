Promise.all([promise1, promise2]).then(() => { allvalue });

Promise.all = function(promises) {

    return new Promise((resolve, reject) => {
        let count = promises.length;
        let valuse = [];

            function somePResolve(value, i) {
                valuse[i] = value;

                if(--count === 0) {
                    resolve(values);
                }
            };


            for(let i = 0 ;i < count; i++) {
                promises[i].then((value) => {
                    somePResolve(value, index)
                }, (e) => {
                    reject(e);
                });
    }

    })
}

Promise.race = function(promises) {

    return new Promise((resolve, reject) => {
        let count = promises.length;
        let valuse = [];

            function somePResolve(value, i) {
                resolve(value);
            };


            for(let i = 0 ;i < count; i++) {
                promises[i].then((value) => {
                    somePResolve(value, index)
                }, (e) => {
                    reject(e);
                });
    }

    })
}