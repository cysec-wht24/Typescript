interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string// method that returns string
    getCoupon(couponname: string, value: number): number// function that returns number
}

interface User {
    githubToken: string
}

interface Admin extends User { // interface => extends
    role: "admin" | "ta" | "learner" // pipe function |, try to avoid it
}

const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33