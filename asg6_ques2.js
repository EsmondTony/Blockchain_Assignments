//To find largest element in the array

function findLargest(size, pos){
    let temp
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            if(arr[i] < arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(`The largest element in the position ${pos} is ${arr[pos-1]} and array is ${arr}`)
}
    

let arr = []
let size = parseInt(prompt("Enter the size of the array"))
let pos = parseInt(prompt("Enter the largest position to find"))
for(let i=0; i<size; i++){
    arr[i] = parseInt(prompt("Enter the array element"))
}
findLargest(size, pos)



//JavaScript program which accept a number as input in the
//function parameter and insert dashes (-) between each two even numbers.