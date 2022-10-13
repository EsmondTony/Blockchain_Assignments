// Program to use switch case to find the grade of a student based on marks obtained

function FindGrade(mark){
    switch(true){
        case ((mark>90 && mark<=100)? true : false ):
            console.log("S garde")
        break;
        case ((mark>80 && mark<=90)? true : false ):
            console.log("A garde")
        break;
        case ((mark>70 && mark<=80)? true : false ):
            console.log("B garde")
        break;
        case ((mark>60 && mark<=70)? true : false ):
            console.log("C garde")
        break;
        case ((mark>50 && mark<=60)? true : false ):
            console.log("D garde")
        break;
        case ((mark>40 && mark<=50)? true : false ):
            console.log("E garde")
        break;
        case ((mark>0 && mark<=40)? true : false ):
            console.log("F garde")
        break;
        default:
            console.log("Invalid mrks")
            break;
    }

}

mark = parseInt(prompt("Enter the student's mark"))
FindGrade(mark)