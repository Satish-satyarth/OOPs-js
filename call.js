
// let userDetails = {
//     name: "satish",
//     age: 22,
//     email: "satish@123.com",
//     printDetailes : function(){
//         console.log(`Users name is ${this.name}`);    
//     }
// }
// console.log(userDetails.name);

// let userDetails2 = {
//     name: "kumkum sahu",
//     age: 21,
//     email: "kumkum@123.com"
// }

// console.log(userDetails.printDetailes.call(userDetails2));

let userDetails3 = {
    name: "satish yadav",
    age: 25,
    email: "satishyadav@123.com",
};
 
let printDetailes = function(state, Country){
    console.log(this.name+ " "+state+ " "+ Country);
}

printDetailes.call(userDetails3 ,"Bihar", "India")

let userDetails4 = {
    name: "satish satyarth",
    age: 20,
    email: "satishsatyarth@123.com",
}
// Function Borrowing
printDetailes.call(userDetails4, "Bihar", "India")

printDetailes.apply(userDetails4,[ "Bihar", "India"])
