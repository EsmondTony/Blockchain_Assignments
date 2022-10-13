// program to output the following pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(`${j} `)
    }
    console.log()
}