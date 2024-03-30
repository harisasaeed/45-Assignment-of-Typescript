//Task 43

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