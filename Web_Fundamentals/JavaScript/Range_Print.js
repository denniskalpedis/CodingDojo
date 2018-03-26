function printRange(start,end="none",skip=1) {
    if (end === "none") {
        end = start;
        start = 0;
    }
    for (var i = start; i < end; i+=skip) {
        console.log(i);
    }
}
printRange(2, 10, 2);
printRange(4, 8);
printRange(4);
printRange(-10, 4, 3);