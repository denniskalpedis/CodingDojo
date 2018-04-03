import random
print "Scores and Grades"
for _1 in range(10):
    score = random.randint(60,100)
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >=70:
        grade = "C"
    else:
        grade = "D"
    print "Score: {}; Your grade is {}".format(score, grade)