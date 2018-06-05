function addMinHeap(arr, val) {
    if (arr.length < 1) {
        arr.push('')
        arr.push(val);
        return arr;
    }
    arr.push(val);
    this.sort = function(arr, val){
        while (arr[arr.length - 1] < arr[Math.floor((arr.length - 1) / 2)]) {
            var temp = arr[arr.length - 1];

            arr[arr.length - 1] = arr[Math.floor((arr.length - 1) / 2)];
            arr[Math.floor((arr.length - 1) / 2)] = temp;

        }
    };

    return arr;
}
console.log(addMinHeap([], 4));
console.log(addMinHeap(['', 1, 2, 13, 15, 16, 17, 18, 19,20,31,35,37,40,41], 4));