// let score: number | string = 33
// score = 44
// score = "55"

// type user1 = {
//     name: string,
//     id: number
// }

// type admin = {
//     username: string,
//     id: number
// }

// let Detail : user1 | admin = {name: "sid", id: 322}

// Detail = {username: "sc", id: 334}

// function getDBId (id: number | string ) {
//     console.log(`DB id is : ${id}`)
// }

// getDBId(3)
// getDBId("3")

function getDBId ( id: number | string ) {
    if (typeof id === "string"){
        id.toLowerCase();
    }
}

const data : (string | number) [] = ["1", "2", 3]

let seatAllotment: "aisle" | "window" | "middle"

seatAllotment = "aisle"