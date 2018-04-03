my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

new_arr = [(key, value) for key, value in my_dict.iteritems()] #list comprehension
'''
new_arr = []
for key, value in my_dict.iteritems():
    new_arr.append((key, value))
'''
print new_arr
