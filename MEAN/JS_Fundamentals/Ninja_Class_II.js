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
    self.punch = function(ninja2){
        ninja2.health -= 5;
        console.log(ninja2.name + " was punched by " + self.name + " and lost 5 health!");
    };
    self.kick = function(ninja2){
        ninja2.health -= (15 * strength);
        console.log(ninja2.name + " was kicked by " + self.name + " and lost " + 15 * strength + " health!");
    };
}
var blueNinja = new ninjaConstructor("Goemon");
var redNinja = new ninjaConstructor("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();