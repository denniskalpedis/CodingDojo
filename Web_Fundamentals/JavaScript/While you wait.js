var daysUntilMyBirthday = 60;
while (daysUntilMyBirthday >= 0) {
    if (daysUntilMyBirthday == 0) {
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    } else if (daysUntilMyBirthday < 5) {
        console.log (daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!!");
    } else if (daysUntilMyBirthday < 30) {
        console.log ("only " + daysUntilMyBirthday + " days left until my birthday.")
    } else {
        console.log (daysUntilMyBirthday + " days until my birthday. Such a long time... :(");
    }
    daysUntilMyBirthday--;
}