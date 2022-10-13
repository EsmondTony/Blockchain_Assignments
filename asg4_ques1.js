function MatchHouses(step){
    let matchStick= 5
    sumOfMatchSticks= 6
    for(let i= 1; i< step; i++){
        if(step === 1){
            return sumOfMatchSticks
        }else{
            sumOfMatchSticks += matchStick
        }
        
    }
    return sumOfMatchSticks
}

let step = parseInt(prompt("Enter the step"))
console.log(`The number of Match Sticks are ${MatchHouses(step)}`)