function getTime (hour, minute, period) {
    if (period == "AM") {
        var timeOfDay = "morning";
    } else {
        var timeOfDay = "afternoon";
    }
    
    if (minute < 30) {

        console.log("it's just after " + hour + " in the " + timeOfDay);
    } else {
        console.log("it's almost " + (hour + 1) + " in the " + timeOfDay);
    }
}
getTime(7,15,"AM");
getTime(9,50,"PM");