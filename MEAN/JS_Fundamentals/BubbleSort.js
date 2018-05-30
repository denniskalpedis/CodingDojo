function bubbleSort(arr){
    totalloops = 0
    for(i = 0; i < arr.length; i++){
        totalloops ++;
        didsort = false;
        for(j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                didsort = true;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(didsort == false){
            console.log("total loops = " + totalloops);
            return arr;
        }

    }
    console.log("total loops = " + totalloops);
    return arr;
}
console.log(bubbleSort([5,3,1,6,7,8,2,4]));
console.log(bubbleSort([1,2,3,4,6,5,7,8]));