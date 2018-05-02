using System;

namespace Human
{
    class Program
    {
        public class Human
        {
            public string name;
            public int strength = 3;
            public int intelligence = 3;
            public int dexterity = 3;
            public int health = 100;
            public Human(string name)
            {
                this.name = name;
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
