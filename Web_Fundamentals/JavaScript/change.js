function optimalChange(value){
    var denominations = [25, 10, 5, 1];
    var change = [0,0,0,0];
    let remainder = value;
    for( let i = 0; i < denominations.length; i++){
        if(remainder > denominations[i]){
            change[i] = Math.floor(remainder / denominations[i]);
            remainder = remainder % denominations[i];
        }
    }
    console.log("Optimal Change for " + value + " cents.");
    console.log("Quarters:" + change[0] + "\nDimes:" + change[1] + "\nNickels:" + change[2] + "\nPennies:" + change[3]);
}

optimalChange(52);
optimalChange(79);
optimalChange(4);


function rollDice(num){
    var total = 0;
    var min = 7;
    var max = 0;
    for(let i = 0; i < num; i++){
        let roll = Math.floor(Math.random()*6 + 1);
        total += roll
        if(roll < min){
            min = roll;
        }
        if(roll > max){
            max = roll;
        }
    }
    console.log(min + " is the min.");
    console.log(max + " is the max.");
    console.log(total/num + " is the Average.");
}

rollDice(10);

console.log(Math.abs(3));
console.log(Math.abs(-2));