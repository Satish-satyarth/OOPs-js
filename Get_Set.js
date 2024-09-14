class user {
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
         return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const userDetails = new user("satish@gmail.com",  "1234");
console.log(userDetails.email)
console.log(userDetails.password);


