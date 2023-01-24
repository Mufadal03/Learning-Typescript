type User = {
    name: string,
    email: string,
    age?: number,
    password: string,
    CreditCard: CardDetails,
    hobbies :Array<string>
}
type CardDetails = {
    CardNum: number,
    exp: number,
    cvv:number
}
const singupPayload: User = {
    name: "Mufadal",
    email: "sadri@gmail.com",
    password: "1234",
    CreditCard: {
        CardNum: 9817181,
        exp: 2000,
        cvv:111
    },
    hobbies:["coding"]
}

const Signup = (payload: User): boolean => {
    //make api call
    return true
}
Signup(singupPayload)

export{}