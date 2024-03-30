//Task 37

//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.



function make_shirt(size: string = "large",message: string = "I love typescript."){
    console.log(`Making a ${size} t_shirt with the message "${message}" Printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
