function printArr(arr, symbol = "->", reverse = false) {
    if (reverse == true) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(i + " " + symbol + " " + arr[i]);
        }
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " " + symbol + " " + arr[i]);
    }
}
printArr([ "James", "Jill", "Jane", "Jack" ]);
printArr([ "James", "Jill", "Jane", "Jack" ], "=>");
printArr([ "James", "Jill", "Jane", "Jack" ], "=>", true);