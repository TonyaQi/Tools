const throttle = (fn, time = 300) => {
    let doing = false;

    return () => {
        if(doing) return ;
        doing = true;
        setTimeout(() => {
            fn.apply(this, arguments);
            doing = false
        }, time);
    }
}