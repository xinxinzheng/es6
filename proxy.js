// var obj = new Proxy({},{
// 	get:function(target,key,receiver){
// 		console.log(`gettting ${key}`);
// 		return Reflect.get(target,key,receiver)
// 	},
// 	set:function(target,key,value,receiver){
// 		console.log(`setting ${key}`);
// 		return Reflect.set(target,key,value,receiver);
// 	}
// })
// obj.count = 1;
// ++obj.count;

var handle = {
    get: function(target, name) {
        if (name === 'prototype') return Object.prototype;
        return 'hello,' + name;
    },
    apply: function(target, thisBindings, args) {
        return args[0]
    },
    constructor: function(target, args) {
        return args[1]
    }
};
var fproxy = new Proxy(function(x, y) {
    return x + y
}, handle)
console.log(fproxy(1, 2), 1)
console.log(new fproxy(1, 2), 2)
console.log(fproxy.prototype, 3)
console.log(fproxy.foo, 4)