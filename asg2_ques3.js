//program to find the factorial of all prime numbers between a given range

function fact(num){
    if(num == 1){
        return 1
    }
    else 
        return num*fact(num-1)
}

function prime(num1, num2){
    for(i= num1; i<= num2; i++){
        let flag = 0
        for(let j= 1; j<= i; j++){
            if((i % j) == 0){
                flag++
            }
        }
        if(flag === 2){
            console.log(`The factorial of ${i} is ${fact(i)}`)
        }
    }
}

let range1 = parseInt(prompt("Enter the number where the range starts from"))
let range2 = parseInt(prompt("Enter the number where the range ends"))
prime(range1, range2)