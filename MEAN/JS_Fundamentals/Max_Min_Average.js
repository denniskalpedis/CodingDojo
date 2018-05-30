function maxMinAvg(arr){
    max = arr[0];
    min = arr[0];
    total = arr[0];
    for(i=1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i]
        }
        total += arr[i];
    }
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + total/arr.length + ".";
}
console.log(maxMinAvg([1, -2, 9, 4]));