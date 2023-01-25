interface User {
    name: string,
    age: number,
    isAuth:boolean
}
// we can achieve it using type aliases 
type Authenticate = {
    name: string,
    age: number,
    isAuth: boolean,
    email:string
}

const INTERFACE_CREDS: User = {
    name: "mufadal",
    age: 20,
    isAuth: false,
    email:"sadri@gmail.com"
}

const TYPE_CREDS: Authenticate = {
    name: "mufadal",
    age: 20,
    isAuth: false,
    email:"email"
}
// MAIN DIFFERENCE BETWEEN TYPE AND INTERFACE IS WE CAN REOPEN INTERFACE AND UPDATE IT BUT WE CANNOT ADD NEW PROP ONCE TYPE ALIASES IS CREATED


interface User{
    email:string
}

// type Authenticate = {
//     email:string ---> DUPLCATE TYPE CANNOT BE PRESENT
// }


// we can extend interface and type

// EXTENDING GITHUB USER INTERFACE WITH USER INTERFACE
interface GITHUB_USER extends User{
    githubId:string
}

const GITHUB_USER: GITHUB_USER={
    name: "mufadal",
    age: 20,
    isAuth: false,
    email: "sadri@gmail.com",
    githubId:"121212"
}

// EXTENDING TYPE 
type GITHUB_AUTH = Authenticate & {
    githubId:string
}

const GITHUB_AUTH_TYPE: GITHUB_AUTH = {
     name: "mufadal",
    age: 20,
    isAuth: false,
    githubId: "121212",
    email:"github@gmail.com"
}