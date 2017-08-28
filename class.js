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
c.toString();
class Test extends Point{
  constructor(x,y,color){
    super(x,y);
    this.color = color;
    super.toString();
  }
}
let d = new Test(4,5,'red');
d.toString()
