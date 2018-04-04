class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
    
    def walk(self):
        self.health -= 1
        return self
    
    def run(self):
        self.health -=5
        return self

    def display_health(self):
        print "{} has {} health.".format(self.name, self.health)
        return self

class Dog(Animal):
    def __init__(self, name, health):
        super(Dog, self).__init__(name, health)
        self.health = 150

    def pet(self):
        self.health += 5
        return self
    
class Dragon(Animal):
    def __init__(self, name, health):
        super(Dragon, self).__init__(name, health)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self
        
    def display_health(self):
        super(Dragon, self).display_health()
        print "I am a Dragon!"
        return self

bird = Animal("joe", 90)
bird.walk().walk().run().display_health()
fido = Dog("Fido", 100)
fido.walk().walk().run().pet().display_health()
eragon = Dragon("Eragon", 130)
eragon.fly().walk().display_health()