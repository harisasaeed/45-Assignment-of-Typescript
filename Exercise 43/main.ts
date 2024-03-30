//Task 43

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians()
// with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians: string[] = ["Harry", " David", "Carlo"];

function showMagicians(magicians: string[]) {
    magicians.forEach(magicians => {
        console.log(magicians)
    })
}
function makeGreat(magicians: string[]) {
    const greatMagicians: string[] = []
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`)
    }
    return greatMagicians
}

let greatMagicians = makeGreat([...magicians]);
console.log("original magicians.");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);
