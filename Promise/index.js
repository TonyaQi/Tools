function myPromise (fn) {

    const _this = this;
    console.log(this);
    _this.state = 'pending';
    _this.reason = null;
    _this.value = null;
    _this.fnCallback = [];
    _this.errorCallback = [];

    function resolve(value) {
        if(_this.state === 'pending') _this.state = 'fulfilled'
        _this.value = value
        _this.fnCallback.forEach(fn => fn())
    }

    function reject(reason) {
        if(_this.state === 'pending') _this.state = 'reject'
        _this.reason = reason;
        _this.errorCallback.forEach(fn => fn())
    }


    fn(resolve, reject);

};

myPromise.prototype.then = function(onFufilled, onReject) {
    const _this = this;
    const thenPromise = new myPromise((resolve, reject) => {
        if(_this.status === 'pending') {
            _this.fnCallback.push(() => {
                try{
                    onFufilled(_this.value);
                } catch(e) {
                    reject(e);   
                }
            })
            _this.errorCallback.push(() => {
                onReject(_this.reason);
            })
        }
    
        if(_this.status === 'fulfilled') {
            onFufilled(_this.value);
            
        }
        if(_this.status === 'reject') {
            onReject(_this.reason);
        }
    })

    return thenPromise;
};

new myPromise((resolve, rej) => {resolve(123)}).then((e) => {console.log(e)}, () => {});
new myPromise((re, rj) => {re(1)}).then((e) => {console.log(e); return 1}).then(v => console.log(v));