// const debounce = (fn, time=300) => {
//     let timer = null;
//     return () => {
//         if(timer)
//             clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, arguments);
//         }, time)
//     }
// };
  

// const fd = (fn, time) => {
//     let timer = null;

//     return function (arguments) {
//         if(timer) 
//             clearInterval(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, arguments);
//         }, time);
//     }
// }

const fangdou = (fn, time = 300) => {
    let timer = null;

    return function (arguments) {
        const that = this;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(that, arguments)
        }, time)
    }
}

const fangdouxianzhixing = (fn, time = 300) => {
    let timer = null;
    let waiting = false;

    return function (arguments) {
        if(!waiting) {
            fn.apply(this, arguments);
            waiting = true;
            timer = setTimeout(() => {
                waiting = false;
            }, time);
        } else {
            clearTimeout(timer);
        }
    }
}