students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

for dict in students:
    print "{} {}".format(dict["first_name"], dict["last_name"])

index = 0
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
 ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
print "Students"
for dict in users["Students"]:
    index += 1
    print "{} - {} {} - {}".format(index, dict["first_name"], dict["last_name"], (len(dict["first_name"]) + len(dict["last_name"])))
print "Instructors"
index = 0
for dict in users["Instructors"]:
    index += 1
    print "{} - {} {} - {}".format(index, dict["first_name"], dict["last_name"], (len(dict["first_name"]) + len(dict["last_name"])))