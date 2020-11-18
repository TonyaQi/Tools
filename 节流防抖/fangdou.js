const debounce = (fn, time=300) => {
    let timer = null;
    return () => {
        if(timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, time)
    }
};
  