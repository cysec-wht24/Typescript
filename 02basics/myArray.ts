const superHeros: string[] = []
const normalPeople: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []
const normalPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

type Hero = {
    name: string
    power: string
    isActive: boolean
}

const allUsers: User[] = []
const allHeros: User[] = []
 
const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})