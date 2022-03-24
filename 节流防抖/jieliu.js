// const throttle = (fn, time = 300) => {
//     let doing = false;

//     return () => {
//         if(doing) return ;
//         doing = true;
//         setTimeout(() => {
//             fn.apply(this, arguments);
//             doing = false
//         }, time);
//     }
// }

// 每n秒 只执行一次
const jl = (fn, time) => {
    let doing = false;

    return function() {
        if(doing) return;
        doing = true;

        setTimeout(() => {
            doing = false;
            fn.apply(this, arguments);
        }, time);
    }
}