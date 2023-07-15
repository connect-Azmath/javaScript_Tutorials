// Proise is an object in JS that returns a value which can be 
//hoped to received in the future but nt immediately 
//& may or may not be accomplished
// can be ---> fulfilled, rejected, pending

const testPromise = new Promise (function (resolve, reject) {
    // setTimeout(() => {
    //     resolve("Success");
    // }, 3000);
    resolve("Success");
    reject("Error encountered : ");
//    resolve("Success");  // try this as well
}); 

testPromise
.then((data) => {
    let res = "- Multiple 'then' options for Promise - " + data;
    return res;
})
.then((data) => {
    console.log("Data was success ", data);
})
.catch((err) => {
    console.log("Promise got rejected with an error - ", err);
})

console.log("Hi Team 1");
setTimeout(( )=>{
    console.log("Hi All, Hope you're doing good. \n Regards \n Azmath ");
},7000);

console.log("Hi Team 2");
console.log("Hi Team 3");

// https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/

// https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/


// Async - Await
// console.log("Async - Await for Promise")
// let testPromiseAnA = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolve inside the timeout - Promise ");   
//     }, 3000);
// });

// var getCalltestPromiseAnA = async () => {
//     const res = await testPromiseAnA;
//     console.log(res);
// }

// getCalltestPromiseAnA();



// Async - Await with try - catch bocks
console.log("Async - Await for Promise with try - catch bocks");
let testPromiseAnA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolve inside the timeout - Promise ");   
    }, 3000);
        reject("Reject inside the Promise ");   

});

var getCalltestPromiseAnA = async () => {
    try{
        const res = await testPromiseAnA;
        console.log("res ---" , res);
    }catch(err){
        console.log("error ---" ,err); // gives log in white color
        console.error("error method ---" ,err); // gives error in Red color
    }
    //custom error message
    // }catch(err){ 
    //         throw new Error("Throwing the exception here ---" ,err); // throows exception
    // }
}
 
getCalltestPromiseAnA();

// Responsive screen standards
// Phone <= 600px
// Tablet <= 768px
// Laptop <= 92px
// Large <= 1200px