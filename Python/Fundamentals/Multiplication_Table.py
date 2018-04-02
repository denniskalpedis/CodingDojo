print "x 1 2 3 4 5 6 7 8 9 10 11 12"
for number in range(1,13):
    next_line = str(number)
    for number2 in range(1,13):
        next_line +=  " " + str(number * number2)
    print next_line