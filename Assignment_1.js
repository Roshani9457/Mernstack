//Question  1: Datatypes and Variables
//Problem: Write a program that defines and logs different data types. 
let Details="Personal Details"              //Declare and initialize variable as datatype string
let Phone_no=7977781089               //Declare and initialize variable as datatype number
let PBoolean=true           //Declare and initialize variable as datatype boolean
let People = {               //Declare and initialize object
    Name:"Krutika",         //Name is key and "Krutika" is value
    Branch: "CO",       
}
let names= ["Asmi","Shweta",98,true]           //Declare and initialize array
console.log(Details)         //print variable Details
console.log(Phone_no)        //print variable Phone_no
console.log(PBoolean)         //print variable PBoolean
console.log(People)                //print variable People
console.log(names)          //print variable names

//Question 2: Operators and Expressions
//Problem: Write a program that performs basic arithmetic operations. 
let a=prompt("Enter First Number:")           //Take input from user and store it in variable a
let b=prompt("Enter Second Number:")       //Take input from user and store it in variable b
console.log("Addition is:",a+b)          //print string and addition of 2 number
console.log("Subtraction is:",a-b)          //print string and subtraction of 2 number
console.log("Multiplication is:",a*b)         //print string and multiplication of 2 number
console.log("Division is:",a/b)               //print string and division of 2 number

//Question 3: Conditional Statements
//Problem: Create a program that checks if a number is positive, negative, or zero.
let c=prompt("Enter Number:")            //Take input from user and store it in variable c
if (c>0) {                               //check c is greater than 0 means positive or not if it is greter than it goes inside if statement
    console.log("Positive number")        //print positive number
} else if (c<0) {                        //check c is less than 0 means negative or not if it is less than it goes inside if statement
    console.log("Negative number")          //print negative number
} else if (c==0) {                   //check c is equal to 0 or not if it is equal to 0 it goes inside if statement
    console.log("Zero")              //print zero   
} else {                             //execute if all above conditon are not satisfied like c is alphabet 
    console.log("Invalid Number")       //print invalid number
}

//Question 4: Control Flow Keywords
//Problem: Write a program that prints all even numbers from 1 to 20.
for (let d=0;d<=20;d++) {         //initialize d=0 and check d less than equal to 20 and incremeant d by 1
    if (d%2==0) {                   //check d is divisible by 2 or not and % return reminder
        if(d==0) {                    //check d == 0 or not
            continue               //if d==0 then it skip this iteration
        }
        console.log(d)            //print d value
    }
}

//Question 5: Combining Concept
//Problem: Create a program that simulates a simple grading system.
var e = prompt("Enter Grade(0-100):");        //Take input from user and store it in variable int
if (e >= 90 && e <= 100)       //if e is between 90-100 then it goes inside if statment
     {
    console.log('A');              //print A
} 
else if (e >= 80 && e <= 89)          //if e is between 80-89 then it goes inside if statment
    {
    console.log('B');            //print B
} 
else if (e >= 70 && e <= 79)                  //if e is between 70-79 then it goes inside if statment
     {
    console.log('C');                 //print C
} 
else if (e >= 60 && e <= 69)             //if e is between 60-69 then it goes inside if statment
     {
    console.log('D');               //print D
} 
else if (e >= 0 && e <= 59)            //if e is between 0-59 then it goes inside if statment
    {
    console.log('F');                  //print F
} 
else {
    console.log("Invalid Numeric Grade. Please enter valid Numeric Grade.");            //execute if all above conditon are not satisfied
}