//program to find the factorial of the given number

function fact(num){
    if(num === 1){
        return 1
    }else{
        return num*fact(num-1)
    }
}

let num = parseInt(prompt("Enter the number: "))
console.log(`The factorial of ${num} is ${fact(num)}`)