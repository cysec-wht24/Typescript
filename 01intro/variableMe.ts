let greetings: string = "Hello Hitesh";
let gesture: string = "Respect";

greetings.toLowerCase()
console.log(greetings);

// number

let userId = 334455.3

userId.toFixed()
// userId = "hitesh"
// boolean
let isLoggedIn: boolean = false



// any

let hero: string;

function getHero(){
    return "thor"
} // should not use any, use compiler flag noImplicitAny 
// to flag any implict any as an error 
hero = getHero()



export {}