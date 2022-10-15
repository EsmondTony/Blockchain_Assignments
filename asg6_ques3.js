// Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers. 

function computeDashe(nums){
    let arr =[], i =0, num =0
    while(nums > 0){
        num = nums % 10
        if(i === 0){
            arr.push(num)
            i++
        }else if(((arr[i - 1] % 2) === 0) && ((num % 2) === 0)){
            // console.log(arr[i-1])
            // console.log(num)
            arr.push("-")
            arr.push(num)
            i = i+2
        }else{
            arr.push(num)
            i++
        }
        nums = Math.floor(nums / 10)
    } 
    console.log(arr)
}

let numbers = prompt("Enter a number :")
computeDashe(numbers)