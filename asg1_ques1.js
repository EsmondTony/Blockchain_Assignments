//program to convert temperatures to and from Celsius, Fahrenheit.

let fToC = (degree) => (degree-32)*5/9
let cToF = (degree) => (degree * 9/5) + 32 
let degree = parseInt(prompt("Enter the degree"))
let choice = parseInt(prompt("Enter 1 to conver Fahrenheit to Celsius, 2 to covert Celsius to Fahrenheit"))
switch(choice){
    case 1:
        console.log(`the degree is ${fToC(degree)}`)
        break
    case 2:
        console.log(`the degree is ${cToF(degree)}`)
        break
    default:
        console.log("invalid option")
}