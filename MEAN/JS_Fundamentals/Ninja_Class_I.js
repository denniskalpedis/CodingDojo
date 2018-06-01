function ninjaConstructor(name) {
    var self = this;
    self.name = name;
    self.health = 100;
    var speed = 3;
    var strength = 3;
    self.sayName = function(){
        console.log("My ninja name is " + self.name);
    };
    self.showStats = function(){
        console.log("Name: " + self.name + ", Health: " + self.health + ", Speed: " + speed + ", Strength: " + strength);
    };
}
var ninja1 = new ninjaConstructor("Hyabusa");
ninja1.sayName();
ninja1.showStats();