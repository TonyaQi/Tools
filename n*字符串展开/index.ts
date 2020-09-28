let a = '3[a]2[bc]'
let b = '3[a2[c]]'
let c = 'xxx3[a]'

let add = (str, num) => {
    let ans = ''
    while(num--) {
        ans+=str;
    }
    return ans;
}

let fn = (str) => {
    let numCount = 0;
    let leftAr = 0;
    let ans = '';
    let nextStr = '';
    for(let i = 0; i < str.length; i++ ) {
        if(str[i] === ']') {
            leftAr = leftAr - 1;
            if(leftAr === 0) {
                ans += add(nextStr, numCount);
                nextStr = '';
                numCount = 0;
            }
        } 

        if(/[a-z]/.test(str[i]) && leftAr === 0) {
            ans += str[i];
        }

        if(/[0-9]/.test(str[i]) && leftAr === 0) {
            numCount = numCount * 10 + Number(str[i]);
        }

        if(leftAr > 0) {
            nextStr += str[i];
        }

        if(str[i] === '[') {
            leftAr = leftAr + 1;
        }
    }
    if(ans.includes('[')) return fn(ans);
    return ans;
}
console.log(fn(c));
