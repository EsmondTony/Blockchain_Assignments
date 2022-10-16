// Input a String S with two words, and replace first word with second word
// and display the result


s = prompt("Enter a string with two words")
fst_char = s[0]
sec_char = s[s.indexOf(" ") + 1]
fst_word = s.substr(1,s.indexOf(" "))
sec_word = s.substr(s.indexOf(" ") + 2)
console.log(sec_char + fst_word + fst_char + sec_word)


