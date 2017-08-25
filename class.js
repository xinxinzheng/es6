class Point{
constructor(x,y){
this.x = x; 
this.y = y;
}
toString(){
console.log(this.x + ',' + this.y);
}
}
let c = new Point(2,3)

class test extends Point{
  constructor(x,y){
    super(x,y}
  }
}
let d = new test(4,5);
c.toString();
d.toString()
console.log(d.name,d.x,d.y,'test');
