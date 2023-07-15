var data = "Hey, how are you?";

console.log("plain data - ", data);
console.log("Uppercase data - ", data.toUpperCase());
console.log("plain data - ", data.toLowerCase());

// slice
console.log("slicing data ---> ", data.slice(3,10));
console.log("length of the data - ", data.length);

var sliceData = data.slice(2,14);
console.log(sliceData);

console.log("reversing slicing data ---> ", data.slice(-7));
console.log("reversing slicing data ---> ", data.slice(-(data.length-1)));

//split
var arr = data.split(" ");
console.log("splitting data arr[0] ---> ", arr[0].length);
console.log("splitting data arr[1] ---> ", arr[1].length);
console.log("splitting data arr[2] ---> ", arr[2].length);

var arrE = data.split("e");
console.log("splitting datawith 'e' delimitor ---> ", arrE[0].length);

//replace
var newData = "JavaScript is amazing...";
console.log("Actual string " , newData);
console.log(newData.replace("JavaScript", "JS"));

//includes any string
console.log(newData.includes("amazing"));
console.log(newData.includes("amazingG"));

var num = "1234567";
console.log(parseInt(num));

var num2 = "12345rst7";
console.log(parseInt(num));
var Updatednum2 = parseInt(num2);
console.log(parseInt(Updatednum2));

var num3 = "asd12345rst7";
console.log("Not a num - " , parseInt(num3)); 

var splitEx = "How are you doing buddy, all good?";
console.log("splitEx " , splitEx.split(" ", 4));
console.log("splitEx " , splitEx.split(" ", 5));
console.log("splitEx " , splitEx.split(" ", 7));

