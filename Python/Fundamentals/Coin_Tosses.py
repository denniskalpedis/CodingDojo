import random
heads = 0
tails = 0
for attempt in range(5000):
    result = random.randint(0,1)
    if result:
        result = "head"
        heads += 1
    else:
        result = "tail"
        tails += 1
    print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(attempt, result, heads, tails)
print "Ending the program, thank you!"
