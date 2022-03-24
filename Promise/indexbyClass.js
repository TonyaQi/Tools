// 未完成
const resolvePromise = (promise, res, resolve, reject) => {
    const then = res.then;
    if(typeof then === 'function') {
        try {
            then.call(res, (value) => {
                resolvePromise(promise, value, resolve, reject)
            }, (err) => {reject(err)})
        } catch (e) {
            reject(e);
        }
    } else {
        resolve(res);
    }
}
class MyPromise{
    constructor(executor){
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onResolvedCallbacks = [];
      this.onRejectedCallbacks = [];
      let resolve = value => {
        console.log(this);
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;

          this.onResolvedCallbacks.forEach(fn=> {
              fn();
          });
        }
      };
      let reject = reason => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fn=> {
            fn();
        });
        }
      };
      try{
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    then(onFulfilled,onRejected) {
      // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      // onRejected如果不是函数，就忽略onRejected，直接扔出错误
      onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err };
      let promise2 = new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
          // 异步
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        };
        if (this.state === 'rejected') {
            try {
                let x = onRejected(this.reason);
                console.log(x);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
        };
        if (this.state === 'pending') {
          this.onResolvedCallbacks.push(() => {
            try {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
          });
          this.onRejectedCallbacks.push(() => {
            try {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
          });
        };
      });
      // 返回promise，完成链式
      return promise2;
    }

    catch(fn) {
        return this.then(null, fn);
    }
  }


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('b');
    }, 100);
})
.then((e) => {
    console.log('1', e)
    return 'a';
})
.then((e) => {
    console.log('2', e)
    return 'b';
}).catch((e) => {console.log('3', e)})
