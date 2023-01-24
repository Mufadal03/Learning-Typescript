function addition(num: number):number {
    return num + 2
}
console.log(addition(10))

const makeUpper = (val:string):string => {
    return val.toUpperCase()
}
console.log(makeUpper("makemeUpperCase"))

const SingUpUser = (name: string, email: string, isPaid: boolean):Object => {
    return {
        name,email,isPaid
    }
}

console.log(SingUpUser("muffy", "sadrimufadal", false)
)

const Login = (name: string, email: string, isPaid: boolean = false) => { }
Login("m","m@gmail.com")
export { }