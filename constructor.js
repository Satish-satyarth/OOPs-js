// ------------------  This keyword ----------------------

//        this = reference to the object where this is used.
//               (the object on the immediate context)

// this keyword doesn't work for Arrow function

const person = {
    name:"satish",
    rolln0: 164,
    email: "satush@gmail.com",
    sayHello : function(){console.log(`Hi! i'm ${this.name}.`);
    }
}

person.sayHello();

const car= {
    company : "Tata",
    model : "safari",
    manufacture : 2024,
    color : "red",
    details : function(){console.log(`Manufacture Year ${this.manufacture}`)}

}
car.details();

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


// ------------- Constructor ---------------------

//  Constructor = constructor is a special method for defining the proprties & methods of object. 


function car1 (make, model, year, color){
    this.make = make;
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`);
    }
}

const carDetails = new car1("ford", "Mustang", 2024, "red");
console.log(carDetails);

carDetails.drive();


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
//console.log(userTwo);

userOne.greeting();
userTwo.greeting();

