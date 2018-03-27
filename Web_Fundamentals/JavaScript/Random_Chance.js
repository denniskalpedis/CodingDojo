function playSlots(quarters, leaveAt) {
    for (quarters; quarters > 0; quarters--) {
        if ((Math.trunc(Math.random()*100)+1) == 100) {
            var winnings = Math.trunc(Math.random()*50) + 51;
            console.log("you win " + winnings + " quarters. CONGRATS!");
            quarters += winnings;
            console.log("you have " + (quarters -1) + " left.")
        } else {
            console.log("You Lost. You have " + (quarters - 1) + " left");
        }
        if (quarters >= leaveAt){
            console.log("you are leaveing with " + quarters + " quarters");
            return;
        } 
    }
    return 0;
}
playSlots(300,350);