//Task 30

let users : string [] = ["admin", "Eric", "Bobby", "Max", "David"];

for(let user of users){
    if (user === "admin"){
        console.log("Hellow admin, would you like to see a status report")
    }else {
        console.log(`hello ${user}, Thankyou for logging in again.`)
    }
}
