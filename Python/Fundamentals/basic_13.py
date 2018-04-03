#print 1-255
for number in range(1,256):
    print number
#print odds 1-255
for number in range(1,256,2):
    print number
#print ints and sum 0-255
total = 0
for number in range(0,256):
    total += number
    print number
    print total
#print array values
arr = [2,6,78,33,1]
for value in arr:
    print value
#print max array
max = 0
for value in arr:
    if value > max:
        max = value
print max
#print average array
total = 0
for number in arr:
    total += number
print total / len(arr)
#Return odds array 1-255
def create_array_of_odds():
    odd_numbers = []
    for number in range(1,256,2):
        odd_numbers.append(number)
    return odd_numbers
print create_array_of_odds()
#Square array values
def square_array(arr):
    for index in range(len(arr)):
        arr[index] = arr[index] ** 2
    return arr
print square_array([1,2,6,9,21])
#Return array count greater than Y
def return_array_count_greater_than_y(arr,y):
    count = 0
    for number in arr:
        if number > y:
            count += 1
    print count
return_array_count_greater_than_y([1,36,81,6,10],11)
#zero out array negative numbers
def zero_out_array_negative_vals(arr):
    for index in range(len(arr)):
        if arr[index] < 0:
            arr[index] = 0
    return arr
print zero_out_array_negative_vals([-2,-27,29,0,1])
#print min,max,average array values
def print_max_min_average_array_vals(arr):
    max = arr[0]
    min = arr[0]
    average = 0
    for number in arr:
        average += number
        if number > max:
            max = number
        elif number < min:
            min = number
    print "Min is {} max is {} average is {}".format(min, max, average/len(arr))
print_max_min_average_array_vals([1,46,2,8,37])
#shift array values left
def shift_array_vals_left(arr):
    for index in range(0,len(arr)-1):
        arr[index] = arr[index+1]
    arr[len(arr)-1] = 0
    return arr
print shift_array_vals_left([1,5,8,35])
#swap string for array negative values
def swap_string_for_array_negative_vals(arr):
    for index in range(len(arr)):
        if arr[index] < 0:
            arr[index] = "Dojo"
    return arr
print swap_string_for_array_negative_vals([-2,-27,29,0,1])