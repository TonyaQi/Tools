const queryList = (list, max = 4) => {
    let flag = 0;
    let counter = 0;
    let listStatus = [];

    // 返回一个异步函数，用于await;
    return new Promise((resolve, reject) => {
        const start = () => {
            while(max > 0 && flag < list.length) {
                max--;
                flag++;
                request(list[flag]).then(() => {
                    max++;
                    counter++;
                    if(counter === list.length) {
                        resolve();
                        listStatus[flag] = 0
                    } else {
                        start();
                    }
                }).catch(() => {
                    listStatus[flag] = (listStatus[flag] || 0) + 1;
                    if(listStatus[flag] > 3) {
                        reject();
                    }
                    max++;// 释放通道
                    start();
                });
            }
        };

        start();
    })

}