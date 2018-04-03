about_me = {"name":"Dennis", "age":"34", "country of birth":"The United States", "favorite language":"Python"}
for key,value in about_me.items():
    print "my {} is {}".format(key,value)

def print_dictionary(dict):
    for key, value in dict.items():
        print "key is {} and value is {}".format(key,value)

print_dictionary(about_me)