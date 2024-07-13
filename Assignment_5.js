//-------------------------------1st question--------------------------------------------
//Write a function that returns a closure which adds a specific number to its argument.

function createAdder(x){            // created function createAdder with parameter x
    return function(y) {            //return function with parameter y as a closure   
        return x+y;                //return x + y                         
    }
}
const add=createAdder(2)        // Call createAdder with argument 2 and store the returned function in the variable adder
console.log(add(3))             // Call the adder function with argument 3 and print the result
console.log(add(4))            // Call the adder function with argument 4 and print the result

//-------------------------------2nd question--------------------------------------------
//Create a function using closure to keep track of how many times it has been called.

function function_call(){               // created function createAdder
    let count = 0                       //initialize count by 0
    return function() {               //return function as a closure
        count = count + 1;           //increament count by 1
        return count                   //return count
    }
}
const adder=function_call();            //call createAdder and store return function in adder
adder()                               //call to adder
adder()                                 //call to adder
adder()                                //call to adder
adder()                               //call to adder
const final_count = adder()             //call to adder and store return value in final_count
console.log(`${final_count} times called closure function`)        

//-------------------------------3rd question--------------------------------------------
//Implement a prototype method to calculate the area of a rectangle object.

class Area_rect {                        //created class Area_react
    constructor(width,height) {         //created constructor of class Area_react with parameter width and height
        this.width = width;             // Assign the width parameter to the instance property 'width'
        this.height = height;           // Assign the height parameter to the instance property 'height'
    }

    calculateArea() {                    //created method calculateArea
        return this.width * this.height       //return multiplication of width and height
    }
}

Area_rect.prototype.greet = function() {        // created method greet on the prototype of class Area_rect
    console.log(`Area of rectangle: ${area.calculateArea()}`)           //call to calculateArea
}

const area = new Area_rect(25,20);          //created instance area of class Area_react with argument 25,20
area.greet();                           //call to greet method

//-------------------------------4th question--------------------------------------------
//Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
class Circle {                             //created class Circle
    constructor(radius) {                 //created constructor of class circle with parameter radius
        this.radius = radius;           // Assign the radius parameter to the instance property 'radius'
    }
     
    calculateArea() {                 //created function calculateArea
        return 3.14 * this.radius * this.radius        //return area of circle by formula
    }

    calculatePerimeter() {                 //created function calculatePerimeter
        return 2 * 3.14 * this.radius       //return perimeter of circle by formula
    }
}

Circle.prototype.greet = function() {          // created method greet on the prototype of class Circle    
    console.log(`Area of circle: ${sample.calculateArea()}`)       //call to calculateArea method
    console.log(`Perimeter of circle: ${sample.calculatePerimeter()}`)      //call to calculatePerimeter method
}
        
const sample = new Circle(5);                     //created instance area of class Circle with argument 5
sample.greet();                                     //call to greet method

//-------------------------------5th question--------------------------------------------
//Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. 
//Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.

function counter(){                //created function counter
    let counter = 0                   //initalize counter by 0
    const increment_counter = (val) => {     //created arrow function 
        counter = counter + val;            //increament counter by val
    }

    const decrement_counter = (val) => {        //created arrow function
        counter = counter - val;               //decrement counter by val
    } 

    const reset_counter = () => {            //created arrow function
        counter = 0;                         //reset counter to 0
    }
    
    const get_value_counter = () => {            //created arrow function
        return counter                           //return counter
    }

    return {                                 //return object with methods
        increment: increment_counter,        // Assign the increment_counter function to the increment property
        decrement: decrement_counter,        // Assign the decrement_counter function to the decrement property
        reset: reset_counter,               // Assign the reset_counter function to the reset property
        getValue: get_value_counter          // Assign the get_value_counter function to the getValue property
    };
}

count=counter();          //call counter function and store return function in count
count.increment(5)         //call to increment_counter function by 5
count.increment(1)          //call to increment_counter function by 1
console.log(`counter value after increment ${count.getValue()}`)  //call to get_value_counter function to print counter value

count.decrement(2)          //call to increment_counter function by 2
console.log(`counter value after decrement ${count.getValue()}`)     //call to get_value_counter function to print counter value

count.reset()                             //call to reset_counter function
console.log(`counter value after reset ${count.getValue()}`)      //call to get_value_counter function to print counter value