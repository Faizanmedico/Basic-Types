let isDone: boolean = false;
console.log(isDone);  //  output     false

let isDone1: boolean = false;
console.log("isDone:", isDone1); // Output: isDone: false
if (!isDone1) {
    console.log("Task is not done yet.");
}


let color: string = "blue";
color = 'red';
console.log(color);  //  output     red


function add(x: number, y: number): number {
    return x + y;
}
console.log(add(2, 3));

let count: number = 42;
let totalPrice: number = 24.99;
let quantity: number = 10;
console.log("count:", count); // Output: count: 42
console.log("totalPrice:", totalPrice); // Output: totalPrice: 24.99
console.log("quantity:", quantity); // Output: quantity: 10


let message: string = "Hello, TypeScript!";
let firstName: string = "John";
let lastName: string = "Doe";
console.log("message:", message); // Output: message: Hello, TypeScript!
console.log("firstName:", firstName); // Output: firstName: John
console.log("lastName:", lastName); // Output: lastName: Doe



let list: number[] = [1, 2, 3];     //    Array
console.log(list[0]);     //  output 1

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
console.log("numbers:", numbers); // Output: numbers: [1, 2, 3, 4, 5]
console.log("fruits:", fruits); // Output: fruits: ["apple", "banana", "orange"]


//Tuple

let myTuple: [number, string ,number, string]; // declaring the tuple
myTuple = [10, "Hello" , 733 , "Sultan"]; // initializing the tuple
console.log(myTuple[2]);                  // output
console.log(myTuple);
console.log(myTuple[3]);





let x: [string, number];    // Tuple
x = ["hello", 10];

let person: [string, number] = ["Sultan", 30];
console.log("person:", person); // Output: person: ["Sultan", 30]


console.log(x[0].substr(1));    // output    ello

enum Color {Red, Green, Blue}  // Enums
let c: Color = Color.Green;
console.log(c);                // output  1


enum Direction {
    Up,
    Down,
    Left,
    Right
}
let direction: Direction = Direction.Up;
console.log("direction:", direction); // Output: direction: 0



 //    TypeScript - Enums ex 2
enum Weekday {
  Monday = 9,
  Tuesday,
  Wednesday = 13,
  Thursday,
  Friday,
  Saturday =7
}
console.log(Weekday.Monday);    //   output
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);
console.log(Weekday.Thursday);
console.log(Weekday.Friday);
console.log(Weekday.Saturday);



let notSure: any = 55;    // any       
notSure = "maybe a string instead";
console.log(notSure);

function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();


let u: undefined = undefined;
let n: null = null;
console.log(u, n);    // output undefined  null

let someValue: any = "this is a string";   //   Type Assertions
let strLength: number = (someValue as string).length;
console.log(strLength);  //  output  16

interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);     //  output  Size 10 Object




  //    TypeScript - Objects


  let person1:{ firstName: string, lastName: string} = { 
    firstName:"Sultan", 
    lastName:"Ahmed" 
     
}; 

    //access the object values 
console.log(person1.firstName)     //   output
console.log(person1.lastName)

    // Example 2

// Try playing around with modifying properties and adding ones to see what happens
let carNew: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(carNew);            //   output
  console.log(carNew.model);
  console.log(carNew.year);
   


//    TypeScript - Objects


let person2:{ firstName: string, lastName: string, company: string, idNum: number} = { 
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
let myBio = {
  firstName:  "Sultan",
  lastName: "Ahmed",
  company: "FaizanMedico",
};
console.log(myBio.company);        //   output
console.log(myBio.firstName);
console.log(myBio);




   // Array
        let fruits1: string[] = ["Apple", "Banana", "Oring"];
        //  mixed Array num string
 let arrayMixed = [1,2,3, "Apple", "sultan", true];
 
 console.log(fruits1);                      //  output
 console.log(arrayMixed[5]);
 console.log(arrayMixed[1]);
 console.log(arrayMixed);
 



     //     Array  any
     let arr: any[] = ["John", 212, true]; 
     arr.push(733); 
     console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
     console.log(arr[3]);
     



           //    TypeScript - Union
           let code: (string | number);
           code = 123;   // OK
           code = "ABC"; // OK
          //  code = false; // Compiler Error
           
           let empId: string | number;
           empId = 111; // OK
           empId = "E111"; // OK
          //  empId = true; // Compiler Error
      
      
          //  Example 2
      
          let val: string | number 
      val = 12 
      console.log("numeric value of val: "+val)  //output  numeric value of val: 12 
      
      val = "This is a string" 
      console.log("string value of val: "+val)   //  output  string value of val: this is a string 
      
      console.log(val);    // output   This is a string
      