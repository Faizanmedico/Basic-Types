var isDone = false;
console.log(isDone); //  output     false
var isDone1 = false;
console.log("isDone:", isDone1); // Output: isDone: false
if (!isDone1) {
    console.log("Task is not done yet.");
}
var color = "blue";
color = 'red';
console.log(color); //  output     red
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
var count = 42;
var totalPrice = 24.99;
var quantity = 10;
console.log("count:", count); // Output: count: 42
console.log("totalPrice:", totalPrice); // Output: totalPrice: 24.99
console.log("quantity:", quantity); // Output: quantity: 10
var message = "Hello, TypeScript!";
var firstName = "John";
var lastName = "Doe";
console.log("message:", message); // Output: message: Hello, TypeScript!
console.log("firstName:", firstName); // Output: firstName: John
console.log("lastName:", lastName); // Output: lastName: Doe
var list = [1, 2, 3]; //    Array
console.log(list[0]); //  output 1
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
console.log("numbers:", numbers); // Output: numbers: [1, 2, 3, 4, 5]
console.log("fruits:", fruits); // Output: fruits: ["apple", "banana", "orange"]
//Tuple
var myTuple; // declaring the tuple
myTuple = [10, "Hello", 733, "Sultan"]; // initializing the tuple
console.log(myTuple[2]); // output
console.log(myTuple);
console.log(myTuple[3]);
var x; // Tuple
x = ["hello", 10];
var person = ["Sultan", 30];
console.log("person:", person); // Output: person: ["Sultan", 30]
console.log(x[0].substr(1)); // output    ello
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // Enums
var c = Color.Green;
console.log(c); // output  1
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log("direction:", direction); // Output: direction: 0
//    TypeScript - Enums ex 2
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 9] = "Monday";
    Weekday[Weekday["Tuesday"] = 10] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 13] = "Wednesday";
    Weekday[Weekday["Thursday"] = 14] = "Thursday";
    Weekday[Weekday["Friday"] = 15] = "Friday";
    Weekday[Weekday["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));
console.log(Weekday.Monday); //   output
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);
console.log(Weekday.Thursday);
console.log(Weekday.Friday);
console.log(Weekday.Saturday);
var notSure = 55; // any       
notSure = "maybe a string instead";
console.log(notSure);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var u = undefined;
var n = null;
console.log(u, n); // output undefined  null
var someValue = "this is a string"; //   Type Assertions
var strLength = someValue.length;
console.log(strLength); //  output  16
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); //  output  Size 10 Object
//    TypeScript - Objects
var person1 = {
    firstName: "Sultan",
    lastName: "Ahmed"
};
//access the object values 
console.log(person1.firstName); //   output
console.log(person1.lastName);
// Example 2
// Try playing around with modifying properties and adding ones to see what happens
var carNew = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(carNew); //   output
console.log(carNew.model);
console.log(carNew.year);
//    TypeScript - Objects
var person2 = {
    firstName: "Sultan",
    lastName: "Ahmed",
    company: "FaizanMedico",
    idNum: 1177
};
//access the object values 
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.company);
// Create a TypeScript object:
var myBio = {
    firstName: "Sultan",
    lastName: "Ahmed",
    company: "FaizanMedico",
};
console.log(myBio.company); //   output
console.log(myBio.firstName);
console.log(myBio);
// Array
var fruits1 = ["Apple", "Banana", "Oring"];
//  mixed Array num string
var arrayMixed = [1, 2, 3, "Apple", "sultan", true];
console.log(fruits1); //  output
console.log(arrayMixed[5]);
console.log(arrayMixed[1]);
console.log(arrayMixed);
//     Array  any
var arr = ["John", 212, true];
arr.push(733);
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
console.log(arr[3]);
//    TypeScript - Union
var code;
code = 123; // OK
code = "ABC"; // OK
//  code = false; // Compiler Error
var empId;
empId = 111; // OK
empId = "E111"; // OK
//  empId = true; // Compiler Error
//  Example 2
var val;
val = 12;
console.log("numeric value of val: " + val); //output  numeric value of val: 12 
val = "This is a string";
console.log("string value of val: " + val); //  output  string value of val: this is a string 
console.log(val); // output   This is a string
