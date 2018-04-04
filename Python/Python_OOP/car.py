class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()
    
    def display_all(self):
        info = "Price: {}\nSpeed: {}\nFuel: {}\nMileage: {}\nTax: {}".format(self.price, self.speed, self.fuel, self.mileage, self.tax)
        print info

car1 = Car(2000, "35mph", "full", "15mpg")
print "\n"
car2 = Car(2000, "5mph", "not full", "105mpg")
print "\n"
car3 = Car(2000, "15mph", "kind of full", "95mpg")
print "\n"
car4 = Car(2000, "25mph", "full", "25mpg")
print "\n"
car5 = Car(2000, "45mph", "empty", "25mpg")
print "\n"
car6 = Car(20000000, "35mph", "empty", "15mpg")
print "\n"