class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    
    def displayInfo(self):
        print "this bike has {} price, and {} max speed. Currently has {} miles.".format(self.price, self.max_speed, self.miles)
        return self
    
    def ride(self):
        self.miles += 10
        return self
    
    def reverse(self):
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        return self
    

bike1 = Bike(250, "25mph")
bike2 = Bike(300, "40mph")
bike3 = Bike(5000, "95mph")
bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()