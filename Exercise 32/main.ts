//Task 32

let current_users: string[] = ["Eric", "Bobby","David", "Alex"];
let new_users: string[] = ["Carlo", "Andy", "Sara", "Vector"];

new_users.forEach(new_users =>{
    if
    (current_users.some(current_users => current_users.toLocaleLowerCase() === new_users.toLocaleLowerCase())){
        console.log(`${new_users}, Will need to enter a new username.`);
    }else {
        console.log(`${new_users}, is available.`);
    }
});