class QueryQue {

    constructor(list, max){
        this.list = list;
        this.max = max;
        this.indexFlag = 0;
        this.res = {};
        this.curRun = 0;
    }

    realDo = (resolve) => {
        while(this.max) {
            const curIndex = this.indexFlag;
            this.indexFlag++;
            this.max--;
            const cur = this.list.shift();
            if(!cur) continue;
            cur().then((v) => {
                this.res[curIndex] = v;
                this.max++;
                this.curRun++;
                if(this.list.length === 0) {
                    resolve(this.res);
                    return;
                }
                this.realDo(resolve);
            })
        }
    }

    add = (fn) => {
        this.list.push(fn);
    }

    start = () => {
        return new Promise((resolve) => {
            this.realDo(resolve)
        }); 
    }
}

const getMethod = (params) => () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(params);
        }, 1000);
    });
}

let a = [
    getMethod(1),
    getMethod(2),
    getMethod(3),
    getMethod(4),
    getMethod(5),
    getMethod(6),
]

const tmp = new QueryQue(a, 3);

tmp.start().then((e) => {
    console.log(e);
});