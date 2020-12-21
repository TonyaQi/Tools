async function a1 () {
    console.log('a1 start')
    await a2()
    console.log('a1 end')
    return 1;
}
async function a2 () {
    console.log('a2')
}

console.log('script start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
    console.log('promise1')
})

let a = await a1();
console.log(a)

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
VM1728:2 a1 start
VM1728:7 a2
VM1728:24 promise2
VM1728:33 script end
VM1728:17 promise1
VM1728:4 a1 end
VM1728:28 promise2.then
VM1728:30 promise3
undefined
VM1728:13 setTimeout

tasks:    
loop:    
js stack: 

log: script start 
a1 start
a2
promise2
scrpit end
promise1
a1end
rimise2.then
promise3
setTimeout