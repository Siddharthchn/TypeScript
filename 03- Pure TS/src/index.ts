// class User  {
//     email: string
//     name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//     this. email = email
//     this.name = name
//     }
// }

// const siddharth = new User ("s@s.com", "sid")

class User {
    readonly city: string = "Delhi";
  
    constructor(
      public email: string, 
      public name: string
    ) {}
  }