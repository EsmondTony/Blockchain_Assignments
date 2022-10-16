// Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result 

s = prompt("Enter a String :")
if(s.length > 4){
    console.log(s.slice(0,4))
}else{
    console.log(s)
}