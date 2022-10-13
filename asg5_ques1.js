//program to find volume of cyclinder, sphere and cone

class Cylinder{
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }

    getVolume(){
        this.volume = (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4)
        return this.volume
    }

}

class Sphere{
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }

    getVolume(){
        this.volume = (4/(3 * Math.PI * Math.pow(this.radius, 3))).toFixed(4)
        return this.volume
    }
}

class Cone{
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }

    getVolume(){
        this.volume = ((Math.PI * Math.pow(this.radius, 2) * this.height)/3).toFixed(4)
        return this.volume
    }
}

let cycliner = new Cylinder(3,4)
console.log(`The volume of the cyclinder is ${cycliner.getVolume()}`)
let sphere = new Sphere(3,4)
console.log(`The volume of the sphere is ${sphere.getVolume()}`)
let cone = new Cone(3,4)
console.log(`The volume of the cone is ${cone.getVolume()}`)
