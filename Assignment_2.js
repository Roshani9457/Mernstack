//Question 1: Multiplication Table Generator
for(i=1;i<=10;i++) {                  //i value show on which table loop is working eg., i=3 means table of 3 
    console.log("Table of " + i)
    for(j=1;j<=10;j++) {                //j value used to multiply with i eg., j=1,i=3 then 
        let res = j*i                  // store multiplication of j and i in res
        console.log(res)        //print result of multiplication
    }
}

//Question 2: Sum of Numbers in an Array
//print sum of array using for loop
let arr = [1,2,3,4,5]                //initialize array with 5 number
let res = arr[0]                      //store value of 0 index of array in res
for(let i=1;i<arr.length;i++) {          //i used to access value from specific index of array
    res = res + arr[i]                   //add res and value of array i and store it in res
}
console.log("Addition is: ",res)        //print addition of array

//print sum of array using for of loop
//use above array
// let res=0                         //initialize res with 0
// for(let i of arr) {                //take a number from array continusly till array ends and override in i variable
//     res = res +i                    //add res and i and override it in res
// }
// console.log("Addition is : ",res)         //print result of addition

//Question 3: Palindrome Checker
function check_palindrome(str) {                //declare check_palindrome function with parameter str
    let rev = "";                                 //create rev variable 
    //this for used to reverse string and store in rev
    for (let i = str.length - 1; i >= 0; i--) {       //i used to access string form end
        rev = rev + str.charAt(i);                  //concate rev string with i index of str
    }
    //this for used to compare rev string and str string
    for (let i = 0; i < str.length; i++) {                 //i used to access string form start
        let a = str.charAt(i);                            //store str first character in variable a
        let b = rev.charAt(i);                            //store rev first character in variable b
        if (a != b) {                              //compare a and b if it is not equal then it will go inside if statement
            return false;                          //return false
        }
    }
    return true;                              //return true
}

console.log(check_palindrome("apple")); // print false
console.log(check_palindrome("LEVEL")); // print true

//Question 4: Fibonacci Sequence Generator
let n=prompt("Enter number:")                //take input from user to create fibonacci series
const fibo = (num)=> {                          //created arrow function with parameter num
    let fib=[0,1]                            //created array 
    for(let i=2;i<num;i++) {
        let nextFib = fib[i - 1] + fib[i - 2];             
        fib.push(nextFib)         //add nextfib to fib
    }
    return fib                  //return fib
}
console.log(fibo(n))              //call fibo function and print

//Question 5: Block Scope with Let and Const
if("empty") {                   //created if statement with empty string to go inside if statement
    let a=21                      //initialize a variable with let datatype and 21 value
    const b=22                   //initialize b variable with const datatype and 22 value
    var c=54                     //initialize c variable with var datatype and 54 value
    
    //access all variable inside if block
    console.log("let variable:",a)               //print sentence and a variable
    console.log("const variable:",b)                 //print sentence and b variable
    console.log("var variable:",c)                 //print sentence and c variable
}

//try to access all variable outside if block
console.log("var variable:",c)               //print sentence and c varible because var datatype is default global
console.log("let variable:",a)              //show error because let initialize inside if block and try to access outside if block
console.log("const variable:",b)           //show error because const initialize inside if block and try to access outside if block