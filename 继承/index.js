function parent () {
    this.fName = 'p'
}

function children () {
    parent.call(this);
    this.lName = 'c'
}

children.prototype = new parent();

