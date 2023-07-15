/*
a+=b || a=a+b

*/

//Increment & Decrement
var a = 10;
console.log("a - ", a++);
console.log("a - ", a);
console.log("a - ", ++a);
console.log("a - ", a);
console.log("a - ", --a);
console.log("a - ", a);
console.log("a - ", a--);
console.log("a - ", a);

// Comparison operator
var a= "30"; //string data
var b=30;
console.log(a==b); // data comparison
console.log(a=b); // value comparios
console.log(a===b); // cross checks data & data type

//Logical operators
console.log("Logical operators - && || ! ");
// !false = true
// !true = false
var isEligible = false;
isEligible ? console.log("enrole") : console.log("You cant enrole until 18")
// varName ? true :false

//if else condition
var a = 10;
var b = 7;
if(a>b){
    console.log("in If condition ");
}else{
    console.log("in else condition ");
    }

// Ternery condition    
(a<b) ?     console.log("1st ternery condition ") : console.log("2nd ternery condition ")
console.log("Logical operators - && || ! ");

let newObj = {
    name : "Azmath",
    phone : 12312323
};
console.log("newObj --> " , newObj, newObj.name, newObj.phone);
console.log("Keys within Obj ", Object.keys(newObj));
console.log("Values within Obj ", Object.values(newObj));

(newObj.name = "Azmath") ? console.log("Name matched") : console.log("Name did not match")   //ternery operator
newObj.phone = 7777777111;
console.log("Phone updated to --> " , newObj.phone);

newObj.email = "az...@gmail.com";
console.log("Email added to newObj --> " , newObj.email);



// ********************** 
const tab = {abc: 1, def: 40, xyz: 50};
const replacements = {'abc': 'a_b_c', 'def': 'd_e_f'};
console.log("key variables in newObj --> " , tab);

let replacedItems = Object.keys(tab).map((key) => {
  const newKey = replacements[key] || key;
  return { [newKey] : tab[key] };
});

console.log("key variables in newObj --> " , tab, replacedItems);
// **********************

//updating Key 
console.log("key variables in newObj --> " , newObj);
console.log("key variables in newObj --> " , Object.keys(newObj));

// let keys = newObj.keys;
let keysVariable = Object.keys(newObj);
console.log("key variable updated in keysVariable --> " , keysVariable);

 
keysVariable.forEach(element => {
    if(element=="name"){
        element="FullName"; 
        console.log("-------- if ---------")
    }
});
console.log("key variable updated in newObj --> " ,  newObj);

//Function inside the Obj
const obj = {
    name: "Az",
    age : 25,
    func: ()  => {
        console.log("Functon inside the Object ");
        return true;
    }
    
}
console.log("Name inside the Object ", obj.name);
console.log("Age inside the Object ", obj.age);
console.log("Functon inside the Object " , obj.func()); 


//Object inside the Obj
const objParent = {
    name: "Azzz",
    age : 25,
    objChild :  {
        fullName : "A.....z",
        dept : "CS"

    }  
}
console.log("Name inside the Object ", objParent.name);
console.log("Child Obj inside the Object ", objParent.objChild);
console.log("Child Obj inside the Object ", objParent.objChild.fullName);

var num = "12345";
console.log("Before parsing type is : ", typeof(num));
console.log(num+2);
num = parseInt(num);
console.log(num);
console.log("After parsing  type is : ", typeof(num));
console.log(num+2);

//Named funcion
function funcName(user, num){
    console.log("Inside the func :" , "\n User name ", user , "\n Phone num is ", num);
}

funcName("Azmath", 123123);

//Anonymous function or function expression
var anonymousFunc = function (user, num) {
    console.log("Anonymous function or function expression ", user, num);
}
anonymousFunc("Azmath",4567);

//Arrow function
var arrowFunc =  (user, num) => {
    console.log("Inside the ArrowFunc  :" , "\n User name ", user , "\n Phone num is ", num);
}

arrowFunc("Azmath", 123123);
