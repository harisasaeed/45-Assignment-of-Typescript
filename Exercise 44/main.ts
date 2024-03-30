//Task 44

function sandwitch(...items: string[]): void {
    console.log("sandwich order")

    for (let i = 0; i < items.length; i ++) {
console.log(`- ${items[i]}`)
    }
}
console.log("enjoy your sandwich ")

sandwitch('capsicum', 'tomato', 'chicken')
sandwitch('beef', 'cheese')
sandwitch('garlic chicken', 'mayo sauce')

