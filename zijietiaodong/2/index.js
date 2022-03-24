async function a1 () {
    console.log('a1 start')
    const res = await a2()
    console.log('a1 end')
    console.log(res);
    return 1;
}
async function a2 () {
    console.log('a2')
    return ('a2 end');
}

console.log('script start')
console.log(1);
setTimeout(() => {
    console.log('setTimeout')
}, 0)
console.log(2);
Promise.resolve().then(() => {
    console.log('promise1')
})
console.log(3);
let a = await a1();
console.log(4);
console.log('xx');
Promise.resolve().then(() => {
    console.log('promisew')
})
console.log(a)

const bb = async () => {
    console.log('b');
}
let b = await bb();
console.log(b);
console.log('here')

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})

promise2.then((res) => {
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
console.log('script end')

script start
VM526:2 a1 start
VM526:9 a2
VM526:20 promise1
VM526:4 a1 end
VM526:5 a2 end
VM526:24 1
VM526:26 here
VM526:30 promise2
VM526:39 script end
VM526:34 promise2.then
VM526:36 promise3
undefined
VM526:16 setTimeout

tasks:   
scriprt start a1 start a2 start
setTimeout
loop:    promise1
js stack: 

log: script start 
a1 start
a2 


一旦遇到await就立刻让出线程，阻塞后面的代码
await 后的代码其实都是要回调的内容

async function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSometing();
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}

test();

var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//3
promise.then((val)=> console.log(val));

console.log("test end...")