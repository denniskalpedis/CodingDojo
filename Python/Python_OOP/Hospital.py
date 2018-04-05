import uuid

class Patient(object):
    def __init__(self, name, allergies, bed_number = "none"):
        self.id = uuid.uuid4()
        self.name = name
        self.allergies = allergies
        self.bed_number = bed_number

    def print_info(self):
        print "\nID: {}\nName: {}\nAllergies: {}\nBed #: {}".format(self.id, self.name, self.allergies, self.bed_number)

class Hospital(object):
    def __init__(self, name, capacity):
        print "Making new Hospital with name, {}, and a total of {} beds.".format(name, capacity)
        self.patients = []
        self.name = name
        self.capacity = capacity
        self.bed_numbers = dict.fromkeys(range(1,capacity+1), "empty")

    def admit(self, name, allergies, bed_number = "none"):
        for key in sorted(self.bed_numbers):
            if self.bed_numbers[key] == "empty":
                self.bed_numbers[key] = "taken"
                bed_number = key
                print
                print "{} admitted to bed #{}! Welcome to {}".format(name, bed_number, self.name)
                new_patient = Patient(name, allergies, bed_number)
                self.patients.append(new_patient)
                return self
        if bed_number == "none":
            print
            print "Hospital is full! can't admit {}.".format(name)
            return self
        

    def discharge(self, name):
        for patient in self.patients:
            if patient.name.lower() == name.lower():
                print
                print "Removed {} from the hospital room #{}".format(patient.name, patient.bed_number)
                self.bed_numbers[patient.bed_number] = "empty"
                self.patients.remove(patient)
                return self
        print
        print "No patient with name {} found in Hospital.".format(name)
        return self

    def patient_info(self):
        print
        self.patients.sort(key = lambda x: x.bed_number)
        for patient in self.patients:
            patient.print_info()
        return self
    

hospital1 = Hospital("General Hospital", 5)
hospital1.admit("Joe", "none").admit("Tom", "bees").admit("Dennis", "Peanuts").admit("Tim", "none").admit("Alex", "pink").admit("Frank", "Mercury").patient_info()
hospital1.discharge("dennis").admit("Frank", "Mercury").patient_info()


        