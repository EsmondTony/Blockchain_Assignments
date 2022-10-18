// Give an example of a Higher Order function and a call back function
// used in the same program.

function HigherOrderFun(callBackFun){
    console.log("This is a Higher Order Function")
    callBackFun()
}

function Fun(){
    console.log("This is a call back function")
}

HigherOrderFun(Fun)