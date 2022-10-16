// Input a String S with a word, and replace character “a” with “x” and
// display the result

s = prompt("Enter a string")
pattern = /a/g
console.log(s.replaceAll(pattern, "x"))