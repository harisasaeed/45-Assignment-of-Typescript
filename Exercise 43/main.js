//Task 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Harry", " David", "Carlo"];
function showMagicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
console.log("original magicians.");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);
