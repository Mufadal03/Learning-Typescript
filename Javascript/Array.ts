const names: Array<string> = []
// names.push(2) Error
names.push("muffy") // 200

type User = {
    email: string,
    name:string
}

const allUsers: Array<User> = []
allUsers.push({ name: "mufadal", email: "abc" })
allUsers.push({ name: "muffi", email: "abc" })

console.log(allUsers)
export{}