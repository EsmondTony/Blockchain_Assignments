//program to find whether a given number is armstrong number or not

let num = parseInt(prompt("Enter a number: "))
let checkNum = num
let sum = 0
while(checkNum > 0){
    digit = checkNum % 10
    sum += digit * digit * digit
    console.log(`the sum is ${sum} and the checknum is ${checkNum} and the digit is ${digit}`)
    checkNum = Math.floor(checkNum / 10)
}
if(num == sum)
    console.log(`${num} is an armstrong number`)
else
    console.log(`${num} is not an armstrong number`)