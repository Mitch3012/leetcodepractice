var MyStack = function() {
    this.queueA = [];
    this.queueB = [];
};

MyStack.prototype.push = function(x) {	
    this.queueB.push(x);

    while (this.queueA.length > 0) {
        const item = this.queueA.shift();
        this.queueB.push(item);
    }

    let temp = this.queueA;
    this.queueA = this.queueB;
    this.queueB = temp; 
};

MyStack.prototype.pop = function() {
    const value = this.queueA.shift();
    return value;
};

MyStack.prototype.top = function() {
    return this.queueA[0];
};

MyStack.prototype.empty = function() {
    return this.queueA.length === 0;
};
