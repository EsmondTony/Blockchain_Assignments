//program to find area of rectangle and square

class Rectangle{
    constructor(length, width){
        this.length = length
        this.width = width
    }

    area(){
        this.area = this.length * this.width
        console.log(`The area is ${this.area}`)
    }
}

class Square extends Rectangle{
    constructor(length, width){
        super(length, width)
    }
}

len = prompt("Enter the length")
wid = prompt("Enter the width")
let square = new Square(len,wid)
square.area()