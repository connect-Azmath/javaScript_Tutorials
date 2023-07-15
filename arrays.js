//Array methods --> map, find, filter, reduce
var arrNum = [1,23,4,5,623,2,1];

//map - used to map each element in an array
var arrNumUpdated = arrNum.map((data, index)=> {
    console.log(data+4, " - " , index);  
    return data+3;
});
console.log(arrNumUpdated);

//3 params
var arrNumUpdated = arrNum.map((data, index, times)=> {
    console.log("----------3Parms" , data+4, " - " , index,times);  
    return data+3;
});
console.log("----------3Parms" , arrNumUpdated);

var arrNumUpdated = arrNum.map((data)=>
     data+2
)
console.log(arrNumUpdated);


//filter - filters data from Array
var arrNumUpdated2 = arrNum.filter((data)=>{
    return data%2==1;
})
console.log("filtered data : " , arrNumUpdated2);


var arrNumUpdated2 = arrNum.filter((data)=>{
    return data<100;
})
console.log("filtered data : " , arrNumUpdated2);


// find - Finding an element
var findElement = arrNum.find((data)=>
    data>23);  // > < >= <= provides first occurance result
    console.log("find method : " , findElement);

var findElement2 = arrNum.find((data)=>
    data==4);   
    console.log("find method : " , findElement2);



//Reduce
var myCart = [12,45,31,24];
var totalPrice = myCart.reduce((data, curValue) => {
   return data+curValue; 
},0) // data = 0 by default
console.log("reduce method : " , totalPrice);

var myCartPrice = [
    {
        price: 12,
        quantity: 1
    },
    {
        price: 45,
        quantity: 1
    },
    {
        price: 31,
        quantity: 2
    },
    {
        price: 24,
        quantity: 3
    },
];

var sumPrice = myCartPrice.reduce((data, sum) => {
    return data+sum.price * sum.quantity;
},0)
console.log("reduce method - price*Qty : ", sumPrice);