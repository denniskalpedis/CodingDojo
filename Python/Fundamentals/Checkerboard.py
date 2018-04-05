line = ""
for row in range(8):
    for column in range(8):
        if (row + column) % 2 == 0:
            line += "*"
        else:
            line += " "
    print line
    line = ""