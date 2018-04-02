
def type_list(temp):
    total_string = ''
    total_sum = 0
    for itm in temp:
        if type(itm) == str:
            total_string ="{} {}".format(total_string, itm)
        elif (type(itm) == int) or (type(itm) == float):
            total_sum += itm
        

    if total_string == "":
        print "The list you entered is of integer type"
        print "Sum: {}".format(total_sum)
    elif total_sum == 0:
        print "The list you entered is of string type"
        print "String: {}".format(total_string)
    else :
        print "The list you entered is of mixed type"
        print "String: {}".format(total_string)
        print "Sum: {}".format(total_sum)


l = ['magical unicorns',19,'hello',98.98,'world']
type_list(l)
l = [2,3,1,7,4,12]
type_list(l)
l = ['magical','unicorns']
type_list(l)