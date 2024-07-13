//-------------1st question-----------------------
//Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized

// function capitalizeStrings(word) {         //created function capitalizeStrings with parameter word
//     Word = word.map((val)=>{            //map used on word array to get value and store return statement in word
//         let d = val[0].toUpperCase()     //convert first letter of first string to upper case and store in d
//         w = val.replace(val[0],d)       //replace first letter of string by capitalized letter and store in w
//         return w                       //return w
//     })
//     return Word;                     //return word
// }

// const words=['apple','banana','cherry']          //created array words
// console.log(capitalizeStrings(words));           //call capitalizeStrings function with argument words 

//-------------2nd question-----------------------
//Create a function that returns the second largest element in an array.

// function secondLargest(number) {       //created function secondLargest with parameter number
//     function idk(a,b){               //created function idk with parameter a,b to sort array
//         if(a>b){                     //check a greater than b or not
//             return 1                //return 1 if a greater than b
//         }
//         else if(a<b){              //check a smaller than b or not
//             return -1             //return -1 if a smaller than b
//         }
//         else {
//             return 0              //return 0
//         }}
//     let arr = number.sort(idk)        //call to sort function with argument idk function an store in arr
//     let ar = number.length - 2        //get array length and - 2 from it to access second last element of array means second largest number
//     return arr[ar]                    //return element at index of ar from arr
// }

// const arr=[1,6,3,7,4]                //created array
// console.log(secondLargest(arr))       //call to secondLargest function with argument arr

//-------------3rd question--------------------------------- 
//Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.

// function getValuesByKey(objects, key) {      //created function getValuesByKey with parameter objects, key
//     let arr = []                           //created empty array
//     for(let i=0;i<objects.length;i++){ 
//         let a = objects[i][key]            //used i to access each key from each object and store in a
//         arr.push(a)                          //add value of a in arr
//     }
//     return arr                              //return arr
// }

// const objects = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}];           //created array of object
// const key = "name";                            //created key variable and store name in it
// console.log(getValuesByKey(objects, key));        //call to getValuesByKey function with argument objects, key

//-------------4th question---------------------------------
//Calculate the factorial of every element in an array and store it in a new array.

// function factorialArray(arr) {                      //created function factorialArray with parameter arr
//     let final_array = arr.map((val) => {          //map used on arr array to get value and store return statement in final_array
//         let fact = 1                             //initialize variable fact with 1
//         for(let i=1;i<=val;i++){           
//             fact=fact*i;                           //multiply fact by i and store in fact
//         } 
//         return fact                              //return fact
//     });
//     return final_array                       //return final_array
// }

// const numbers = [1, 2, 3, 4];                 //created array numbers
// console.log(factorialArray(numbers));           //call to factorialArray function with argument numbers

//-------------5th question---------------------------------
//Create a function to find the intersection of two arrays.

// function intersection(arr1,arr2) {         //created function intersection with parameter arr1,arr2
//     let arr = []                           //created empty array
//     for(let i=0;i<arr1.length;i++) {
//         for(j=0;j<arr2.length;j++) {
//             if(arr1[i]===arr2[j]) {             //check 1 element of array1 is equal to 1 element of array2 or not
//                 arr.push(arr2[j])               //if array1[i] equal to array2[j] then add array2[j] in arr
//             }
//         }
//     }
//     return arr                                 //return arr
// }

// const array1 = [1, 2, 3, 4];                    //created array1
// const array2 = [3, 4, 5, 6];                     //created array2
// console.log(intersection(array1, array2));       //call to intersection function with argument array1, array2
