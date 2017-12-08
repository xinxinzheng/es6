//构造器模式
var a = 'hello';
//1.对象创建方法
let newobj = {};
let newobj1 = new Object();

//2.赋值属性
newobj.someProperty = '123';
newobj['someProperty1'] = '123';
Object.defineProperty(newobj, 'someProperty2', {
    enumerable: true,
    configurable: true,
    get: function() {
        return this.value;
    },
    set: function(newValue) {
        this.value = newValue + 'haha';
    },
});
Object.defineProperties(newobj, { 'someProperty3': { value: '12345' } });
newobj.someProperty2 = '1234'
console.log(newobj, newobj.someProperty2, newobj.someProperty3);

//3.创建对象
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function() {
        return this.model + 'has done ' + this.miles + " miles";
    }
}

var civic = new Car('Hodar civic', '2009', '20000');
var mondeo = new Car('mondeo', '2010', '5000');
console.log(civic.toString());
console.log(mondeo.toString());

function Car1(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car1.prototype.toString = function() {
    return this.model + 'has done ' + this.miles + " miles";
}

var civic1 = new Car1('Hodar civic', '2009', '20000');
var mondeo1 = new Car1('mondeo', '2010', '5000');
console.log(civic1.toString());
console.log(mondeo1.toString());