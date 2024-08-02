// const user = {
//     name: "Sid",
//     email: "sid@active.com",
//     isActive: true,
// }

// function createUser ({
//     name: string, isPaid: boolean
// }) {}

// createUser({ name: "sid", isPaid: false })

// function createCourse (): {name: string, price: number} {
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser (user: User){}

// createUser({name: "", email: "", isActive: true})

// READONLY or optional

type User ={
    readonly _id: string;
    name: string;
    email: string;
    isActive : boolean
    creditCardDetails ?: number
}

let myUser : User = {
    _id: "12345",
    name: "sid",
    email: "S@s.com",
    isActive: false
}

myUser.email = "s@gmail.com"; 


// 

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}