//-------------------------------1st question--------------------------------------------
//Write a function that takes an object and returns an array of the object's keys and values

function getKeysAndValues(person) {                 //created function getKeysAndValues with parameter person
let arr = []                                       //created empty array arr
for(let i in person) {                             //for used to access single key and value from person object
    let a=[]                                       //created empty array a
    a.push(i,person[i])                           //added element of i and person[i] in array a
    arr.push(a)                                   //added array a in arr
}
return arr                                         // return array arr
}

let persons = { name: "John", age: 30 };              //created object person
console.log(getKeysAndValues(persons));             //call to getKeysAndValues function with argument person

//-------------------------------2nd question--------------------------------------------
//Create a function to convert a string to title case.

function toTitleCase(str) {                   //created function toTitleCase with parameter str
    let words = str.split(" ")               //used split to separate string by space and it store string in array format in words
    function capitalizeStrings(word) {      //created nested function capitalizeStrings with parameter word
        Word = word.map((val)=>{             //used map to access value of word
            let d = val[0].toUpperCase()      //convert first letter of first string to upper case and store in d
            w = val.replace(val[0],d)         //replace first letter of string by capitalized letter and store in w
            return w                             //return w
        })
        return Word;                             //return word
    }
    let arr = capitalizeStrings(words)           //call to capitalizeStrings function with parameter words and store output in arr in array format
    str = arr.join(' ')                         //join used to join array element by space and store in str
    return str                                  //retuen str
}

console.log(toTitleCase("hello world"))              //call to toTitleCase function with parameter "hello world" string

//-------------------------------3rd question--------------------------------------------
//Implement a function that checks if an object is empty.

function emptyObject(obj) {                //created function emptyObject with parameter obj
if(Object.keys(obj).length === 0) {        //check obj keys length is equal to 0 or not 
    console.log("Object is empty")         //if obj keys length is equal to 0 then prints "Object is empty" 
}
else {
    console.log("Object is not empty")       //prints "Object is not empty"
    console.log(obj)                          //prints obj
}}

let object = {}                           //created empty object
emptyObject(object)                        //call to emptyObject function with argument object
let person = { name: "John", age: 30 };     //created object
emptyObject(person)                         //call to emptyObject function with argument person

//-------------------------------4th question--------------------------------------------
//Write a function to count the number of occurrences of each character in a string.

function charCount(str) {                   //created function charCount with parameter str
    let obj = {}                            //created empty object
    str = str.toLowerCase()                   //converted string to lower case and store in str
    for (let i=0;i<str.length;i++) {          
        let s = str[i]                       //store character present at index i from string in s
        var count = 0                        //initialize count with 0
        for(let j=0;j<str.length;j++) {        
            if(str[j]==s) {                    //check if charxter at index i is equal to character store in s
                count++                        //increament counter by 1
            }
        }
        obj[s] = count                      //charater store in s is store in obj as key and count as value
    }
    return obj                               //return obj
}

console.log(charCount("helLo world"));         //call to charCount function with string "helLo world"

