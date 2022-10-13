//program to find the sum of the multiples of 3 and 5 under 1000

let sum =0
for(i =1; i<=1000; i++){
    if((i%3 == 0) && (i%5 == 0))
        sum += i
}
console.log(`The sum of multiples of 3 and 5 is ${sum}`)