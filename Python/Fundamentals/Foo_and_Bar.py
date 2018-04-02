for number in range(100, 100001):
    is_prime = False
    for i in range(2,number+1):
        if number == i:
            is_prime = True
        elif number % i == 0:
            break
    if int(number ** .5) * int(number ** .5) == number:

        print "Bar"
        continue
    elif is_prime:
        print "Foo"
    else:
        print "FooBar"