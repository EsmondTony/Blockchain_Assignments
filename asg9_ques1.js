// question
// ---------
// Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program

// function OuterFunction()
// { var outerVariable = 100;
// function InnerFunction() {
// alert(outerVariable);
// }
// return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

// answer:
// --------
// a) Yes, the InnerFunction() is a closure
// b) 100