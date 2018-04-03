def odd_even ():
    odd_or_even = ""
    for number in range(1,2001):
        if number % 2 == 0:
            odd_or_even = "even"
        else :
            odd_or_even = "odd"
        print "Number is {}. This is an {} number.".format(number, odd_or_even)

odd_even()
def multiply(arr, value):
    for index in range(len(arr)):
        arr[index] *= value
    return arr

print multiply([1,5,82,4,10],3)
def layerd_multiples(arr=[2,4,5]):
    print arr
    new_arr = [([1] * ones) for ones in arr]
    '''
    new_arr = []
    for ones in arr:
        new_arr.append([1] * ones)
    '''
    return new_arr

print layerd_multiples(multiply([2,4,5],3))