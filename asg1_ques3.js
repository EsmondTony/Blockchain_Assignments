//program to find whether the given year is leap year or not

let year = prompt("Enter to check whether the given year is leap year or not")
if((year % 4) === 0){
    if((year % 100) === 0){
        if((year % 400) === 0){
            console.log(`${year} is an leap year`)
        }else{
            console.log(`${year} is not an leap year`)
        }
    }else{
        console.log(`${year} is not an leap year`)
    }
}else{
    console.log(`${year} is not an leap year`)
}