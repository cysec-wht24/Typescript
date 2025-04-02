//Defining Custom types 

// const user: (string | number)[] = [1, "hc"]
// let tUser: [string, number, boolean]

// tUser = ["hc", 131, true]

// let rgb: [number, number, number] = [255, 123, 112]

// type User = [number, string]

// const newUser: User = [112, "example@google.com"]

// newUser[1] = "hc.com"
// newUser.push(true)


type Food = string
let favourateFood: Food = "pizza"

type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
}

let person1: Person = {
    name: "joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "jill",
    age: 62,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}





















export {}