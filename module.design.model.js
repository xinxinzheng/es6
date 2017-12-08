var testModule = (function() {
    var counter = 0;
    return {
        incrementCounter: function() {
            return ++counter;
        },
        resetCounter: function() {
            console.log("counter value prior to reset :" + counter);
            counter = 0;
        }
    }

})();
testModule.incrementCounter();
testModule.resetCounter();

var myNamespace = (function() {
    var myPrivateVar = 0;

    var myPrivateMethod = function(foo) {
        console.log(foo);
    }

    return {
        myPublicVar: 'foo',
        myPublicFunction: function(bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    }
})()

myNamespace.myPublicFunction('hello');

var basketModule = (function() {
    //私有
    var basket = [];

    function doSomethingPrivate() {

    }

    function doSomethingElsePrivate() {

    }

    return {
        addItem: function(values) {
            basket.push(values)
        },
        getItemCounter: function() {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        getTotal: function() {
            var itemCount = this.getItemCounter(),
                total = 0;
            while (itemCount--) {
                total += basket[itemCount].price;
            }
            return total;
        }
    }
})()
basketModule.addItem({
    item: 'bread',
    price: 0.5
});
basketModule.addItem({
    item: 'butter',
    price: 0.3
})
console.log(basketModule.getItemCounter());
console.log(basketModule.getTotal());
console.log(basketModule.basket);

// var myModule = (function(jQ, _) {
//     function privateMethod() {
//         jQ('.container').html('test');
//     }

//     function privateMethod2() {
//         console.log(_.min([1, 2, 3, 4, 5, 8]));
//     }
//     return {
//         publicMethod: function() {
//             privateMethod();
//         }
//     }
// })(jQuery, _)
// myModule.publicMethod();

var myModule = (function() {
    var module = {},
        privateVailable = 'hello world';

    function privateMethod() {

    }

    module.publicProperty = "FooBAR";
    module.publicMethod = function() {
        console.log(privateVailable);
    }
    return module;
})();

myModule.publicMethod();

// function library(module) {
//     $(function() {
//         if (module.init) {
//             module.init();
//         }
//     })
// }

// var myLibrary = library(function() {
//     return {
//         init: function() {
//             console.log(1234);
//         }
//     }
// })();

var myRevealingModule = function() {
    var privateVar = "Ben Cherry",
        publicVar = 'Hey there!';

    function privateFunction() {
        console.log("Name:" + privateVar);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    }
}();
myRevealingModule.setName('Paul kinlan');
myRevealingModule.getName();
console.log(myRevealingModule.greeting);

var myRevealingModule = function() {
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount() {
        return privateCounter;
    }
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount,
    }
}