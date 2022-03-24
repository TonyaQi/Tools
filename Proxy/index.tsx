const obj = new Proxy({}, {
    get: (target, propKey) => {
        return target[propKey] || ''
    }
});