class MyClass{
  [Symbol.hasInstance](foo){
  	console.log(foo);
    return foo instanceof Array;
  }
}
var o = new MyClass()
console.log([1,2,3] instanceof o)

