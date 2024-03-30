//Task 37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript."; }
    console.log("Making a ".concat(size, " t_shirt with the message \"").concat(message, "\" Printed on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
