// Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

let text = prompt("Enter yes")
let pattern = /^(yes|Yes|YES)$/g
let result = pattern.test(text)
console.log(result)