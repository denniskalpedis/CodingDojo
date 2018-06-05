class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Name: " + this.name + " Strength = " + this.strength + " Speed = " + this.speed + " Health = " + this.health);

    }
    drinkSake(){
        this.health += 10;
    }
}
class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Man who make mistake in elevator, wrong on many levels!");
    }
}

var donatello = new Ninja("Donatello");
var raphael = new Ninja("Raphael");
donatello.sayName();
donatello.drinkSake();
donatello.showStats();
raphael.sayName();
var splinter = new Sensei("Master Splinter");
splinter.sayName();
splinter.speakWisdom();
splinter.showStats();