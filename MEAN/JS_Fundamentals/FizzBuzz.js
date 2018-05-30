function fizzbuzz(n){
    if(isNaN(n)){
        return nulll;
    }
    returningString = "";
    for(i = 1; i <= n; i++){
        printout = "";
        if(i % 3 == 0){
            printout += "Fizz";
        }
        if(i % 5 == 0){
            printout += "Buzz";
        }
        if(printout == ""){
            returningString += i;
        } else {
            returningString += printout;
        }
        if(i < n - 1){
            returningString += ", ";
        } else if(i == n-1){
            returningString += ", and ";

        } else { 
            returningString += ".";
        }
    }
    return returningString;
}

results = fizzbuzz(15);
console.log(results);