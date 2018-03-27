// Numbers Only
// Make a function that copies an array, ONLY accepting the items that are numbers.

// IT SHOULD RETURN A NEW ARRAY

// ex:

// var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// // newArray is [1, -3, 0.5]
// HINT

// Use typeof to determine type (ex: typeof 24 === "number" would be true)

// Bonus (Only If You Have Time):

// Make a second function that removes them from the given array. (instead of copying to a new array)
// Do you need to return the array? no
var testArr = [1, "apple", -3, "orange", 0.5];
function numbersOnly(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function removeNumbers() {
    var tempPlace = "";
    for (var i = 0; i < testArr.length; i++) {
        if (typeof(testArr[i]) === "number") {
            testArr.splice(i,1);
        }
    }
}
var newArray = numbersOnly(testArr);
console.log(newArray);
removeNumbers()
console.log (testArr);