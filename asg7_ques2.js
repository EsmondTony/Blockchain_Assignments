// Input a String S with multiple words, and remove whitespaces and
// output the result 

s = prompt("Enter a String to remove the whitespace character")
pattern = /\s/g
console.log(s.replaceAll(pattern, ""))