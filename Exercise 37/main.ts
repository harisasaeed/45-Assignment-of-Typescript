//Task 37

function make_shirt(size: string = "large",message: string = "I love typescript."){
    console.log(`Making a ${size} t_shirt with the message "${message}" Printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");