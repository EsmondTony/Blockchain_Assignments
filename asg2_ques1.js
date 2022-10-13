// program to find triangle is equilateral, isosceles or scalene

len1 =parseFloat(prompt("Enter the length of the triangle"))
len2 =parseFloat(prompt("Enter the length of the triangle"))
len3 =parseFloat(prompt("Enter the length of the triangle"))
if((len1 === len2) && (len1 === len3))
    console.log("The Traingle is Equilateral")
else if((len1 == len2) || (len1 == len3) || (len2 == len3))
    console.log("The Traingle is Isoceles")
else
    console.log("The Traingle is Scalene")