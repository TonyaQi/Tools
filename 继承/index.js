function parent () {
    this.fName = 'p'
}

function children () {
    // call 的时候就把parent中的语句执行一遍，执行this.fname = 时 ，children也有了
    parent.call(this);
    this.lName = 'c'
}

// 继承父函数的方法
children.prototype = new parent();

