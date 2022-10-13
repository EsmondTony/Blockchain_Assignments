//a program to find whether a given number is special number or not

function fact(num){
    if(num == 1)
        return 1
    else
        return num*fact(num-1)
}

let num = parseInt(prompt("Enter a number: "))
let checkNum = num
let sum = 0
while(checkNum > 0){
    digit = checkNum % 10
    sum += fact(digit)
    console.log(`the fact is ${fact(digit)} the sum is ${sum} and the checknum is ${checkNum} and the digit is ${digit}`)
    checkNum = Math.floor(checkNum/10)
    
}
if(num == sum)
    console.log(`${num} is a special number`)
else
    console.log(`${num} is not a special number`)