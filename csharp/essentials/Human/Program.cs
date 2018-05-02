using System;

namespace Human
{
    class Program
    {
        public class Human
        {
            public string name;
            public int strength { get; set; }
            public int intelligence { get; set; }
            public int dexterity { get; set; }
            public int health { get; set; }
            public Human(string name)
            {
                this.name = name;
                this.strength = 3;
                this.intelligence = 3;
                this.dexterity = 3;
                this.health = 100;
            }
            public Human(string name, int strength, int intelligence, int dexterity, int health)
            {
                this.name = name;
                this.strength = strength;
                this.intelligence = intelligence;
                this.dexterity = dexterity;
                this.health = health;
            }
            public void attack(Human attacked)
            {
                attacked.health -= this.strength*5;
            }
        }
        public class Wizard : Human
        {
            public Wizard(string name) : base(name, 3,25,3,50)
            {

            }
            public void heal()
            {
                health += 10*intelligence; 
            }
            public void fireball(Human attacked)
            {
                Random rand = new Random();
                attacked.health -= rand.Next(20,50);
            }
        }
        public class Ninja : Human
        {
            public Ninja(string name) : base(name, 3,3,175,100)
            {

            }
            public void steal()
            {
                health += 10; 
            }
            public void get_away(Human attacked)
            {
                health -= 15;
            }
        }
        public class Samurai : Human
        {
            public Samurai(string name) : base(name, 3,3,3,200)
            {

            }
            public void death_blow(Human attacked)
            {
                if (attacked.health < 50)
                {
                    attacked.health = 0;
                } 
            }
            public void meditate()
            {
                health = 200;
            }
        }
        static void Main(string[] args)
        {
            Human warrior = new Human("Dennis");
            System.Console.WriteLine(warrior.name);
            System.Console.WriteLine(warrior.strength);
            System.Console.WriteLine(warrior.intelligence);
            System.Console.WriteLine(warrior.dexterity);
            System.Console.WriteLine(warrior.health);
        }
    }
}
