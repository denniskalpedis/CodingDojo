function addMinHeap(arr, val) {
    if (arr.length < 1) {
        arr.push('');
        arr.push(val);
        return arr;
    }
    arr.push(val);
    
    this.sort = function(arr, idx){
        if(arr[idx] < arr[Math.floor(idx/2)]){
            var temp = arr[idx];
            arr[idx] = arr[Math.floor(idx / 2)];
            arr[Math.floor(idx / 2)] = temp;
            sort(arr, Math.floor(idx/2));
        }
    };
    this.removeFirst = function(arr){
        if(arr[2] == null){
            return;
        }else if(arr[3] == null) {
            arr = shiftLeft();
        } else if (arr[2]< arr[3]){
            arr = shiftLeft();
        } else {
            var temp = arr[2];
            arr[2] = arr[3];
            arr[3] = temp;
            arr = shiftLeft();
        }

        function shiftLeft(arr){
            for(let i = 1; i < arr.length; i++){
                arr[i] = arr[i+1];
                arr.pop();
            }
            return arr;
        }
    };
    sort(arr, (arr.length - 1));
    return arr;
}
function removeFirst(arr){
    if(arr[2] == null){
        return arr;
    }else if(arr[3] == null) {
        arr = shiftLeft(arr);
    } else if (arr[2]< arr[3]){
        arr = shiftLeft(arr);
    } else {
        var temp = arr[2];
        arr[2] = arr[3];
        arr[3] = temp;
        arr = shiftLeft(arr);
    }

    function shiftLeft(arr){
        for(let i = 1; i < arr.length; i++){
            arr[i] = arr[i+1];
        }
        arr.pop();
        return arr;
    }
    return arr;
};
var array = [];
addMinHeap(array, 2);
addMinHeap(array, 73);
addMinHeap(array, 5);
addMinHeap(array, 6);
addMinHeap(array, 23);
addMinHeap(array, 1);
console.log(array);
array = removeFirst(array);
console.log(array);
console.log(addMinHeap([], 4));
console.log(addMinHeap(['', 1, 2, 13, 15, 16, 17, 18, 19,20,31,35,37,40,41], 4));