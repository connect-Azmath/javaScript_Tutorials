var a = 10;
console.log(a);

var name = "Azmath";
console.log("My name is ", name);

var stud1 = 90 ;
var stud3 = 92 ;
var stud3 = 93 ;
var stud4 = 91 ;
var stud5 = 97 ;

// different data types can be stored in an Obj
var obj1 = {
    a: 20,
    name: "Azmath",
    heigth: 5.3,
    isGood: true,
}

console.log("Object ", obj1);
console.log(obj1.name);

//Array - Homogenous data stored
var marks = [12,13,12,1,4,50,53];
console.log("Marks ", marks);
console.log(marks[0]);
// var msgAler = alert("marks of 3rd student", marks[2]);

var students = ["Az", "Rohn", "Am", "MH", 123]; // in JS 123 possible unlike other langs
console.log("Students ", students);
console.log(students[4]);

var hetroArray = ["Az", "Rohn", "Am", "MH", 123, {isGood:true}, [12,23,43,5,1]]; // in JS 123 possible unlike other langs
console.log("hetroArray ", hetroArray);
console.log(hetroArray[0]);
console.log(hetroArray[4]);
console.log(hetroArray[5].isGood);
console.log(hetroArray[6][2]);

var twoDimArr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log("2D-Array ", twoDimArr[2][1]);


