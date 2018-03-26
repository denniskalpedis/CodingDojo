var totalPaid = 0;
var daysPaid = 0;
var dailyPayment = .01;
var tenThousand = false
var oneBillion = false
while(totalPaid < Infinity) {
    daysPaid++;
    totalPaid += dailyPayment;

    if (totalPaid >= Infinity) {
        console.log("took " + daysPaid + " days to get 'infinity' money!");
    } else if (totalPaid >= 1000000000 && !oneBillion) {
        oneBillion = true;
        console.log("took " + daysPaid + " days to get $1,000,000,000.");
    } else if (totalPaid >= 10000 && !tenThousand) {
        tenThousand = true;
        console.log("took " + daysPaid + " days to get $10,000.");
    }
    if (daysPaid == 30) {
        console.log ("after 30 days the farmer made, $" + totalPaid);
    }
    dailyPayment += dailyPayment;
}