// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
// here createCourse() - function name
// the () - is where the parameters are passed
// {} - the first brackets is to declare the return type
// {} - the second bracket is for function defination
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string // say this is used by mongoDB to store properly so you want no one to edit it
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // this will make this detail optional requirement
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // type=> &
    cvv: number
}


myUser.email = "h@gmail.com"
// myUser._id = "asa" // in js file no error is shown only in ts file error is shown








export {}