// Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.
// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string

function ConvertUpperCase(str){
    // Convert the String into upper case.
    console.log(str.toUpperCase())
}

function ConvertFirstCharUpper(str){
    // Convert only the first character to uppercase.
    if(str[0] == str[0].toUpperCase()){
        console.log(str)
    }else{
        console.log(str[0].toUpperCase() + str.substring(1))
    }
}

function ConvertLowerCase(str){
    // Convert the String into lower case.
    console.log(str.toLowerCase())
}

function BreakAndSwap(str){
    // Break the string into two halves and swap them.
    middleChar = Math.ceil(str.length / 2)
    console.log(str.substring(middleChar) + str.substring(0, middleChar))

}

function CountRepeatingChar(str){
    // Count the repeating characters.
    arrOfChar = []
    for(let i =0; i <str.length; i++){
    count = 0
        for(let j =i+1; j <str.length; j++){
            if(str[i] === str[j]){
                count++
            }
        }
        if((count >= 1) && (!arrOfChar.includes(str[i]))){
            arrOfChar.push(str[i])
        }
    }
    console.log(arrOfChar.length)
}

function ReverseString(str){
    // Reverse the string
    arr = []
    for(let i =1; i <= str.length ;i++){
        arr.push(str[str.length - i])
    }
    console.log(arr.join(""))

}

text = "Hello"
while(true){
    console.log("Enter the number to perform the following action \n1) Convert the String into upper case."+ 
    "\n2) Convert only the first character to uppercase. \n3)Convert the String into lower case."+ 
    "\n4) Break the string into two halves and swap them. \n5) Count the repeating characters."+ 
    "\n6) Reverse the string \n7) Exit")
    choice = parseInt(prompt("Enter the choice"))
    switch(choice) {
        case 1:
            // 1) Convert the String into upper case.
            ConvertUpperCase(text)
            break;
        case 2:
            // 2) Convert only the first character to uppercase.
            ConvertFirstCharUpper(text)
            break;
        case 3:
            // 3)Convert the String into lower case.
            ConvertLowerCase(text)
            break;
        case 4:
            // 4) Break the string into two halves and swap them.
            BreakAndSwap(text)
            break;
        case 5:
            // 5) Count the repeating characters.
            CountRepeatingChar(text)
            break;
        case 6:
            // 6) Reverse the string
            ReverseString(text)
            break;
        case 7:
            // 7) Exit
            console.log("Exit")
            break;
        default:
            console.log("Enter a valid number to perform the action \n")
      }
      if(choice == 7){
        break;
      }
}

