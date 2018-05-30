function coinChange(num){
    coins = [["Quarters", 25], ["Dimes", 10], ["Nickles", 5], ["Pennies", 1]];
    coinResults = [];
    returnString = "";
    for(i = 0; i < coins.length; i++){
        coinResults[i] = 0;
        if(num >= coins[i][1]){
            coinResults[i] = Math.floor(num/coins[i][1]);
            num = num % coins[i][1];
        }
        returnString += coinResults[i] + " " + coins[i][0];
        if(i < coins.length - 1){
            returnString += ", ";
        }
    }
    return returnString;
}
console.log(coinChange(251));
console.log(coinChange(421));