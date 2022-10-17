// Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.

let numbers = new Set()
for(let i =0; i <4; i++){
    numbers.add(Math.random()*10)
}
if(numbers.has(8)){
    console.log("The set object has 8 in it")
}else{
    console.log("The set object dont had 8 in it")
}