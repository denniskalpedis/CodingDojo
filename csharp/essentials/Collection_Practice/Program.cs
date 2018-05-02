using System;
using System.Collections.Generic;

namespace Collection_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numArray2 = {0,1,2,3,4,5,6,7,8,9};
            string[] names = {"Tim", "Martin", "Nikki", "Sara"};
            bool[] truefalse = {true, false, true, false, true, false, true, false, true, false};
            int[,] multiplication = new int[10,10];
            for(int i = 0; i < multiplication.GetLength(0); i++)
            {
                for(int j = 0; j < multiplication.GetLength(1); j++)
                {
                    multiplication[i,j] = (i + 1) * (j + 1);
                }
            }
            for (int i = 0; i < multiplication.GetLength(0); i++)
            {
                for (int j = 0; j < multiplication.GetLength(1); j++)
                {
                    Console.Write(string.Format("{0} ", multiplication[i, j]));
                }
                Console.Write(Environment.NewLine + Environment.NewLine);
            }
            List<string> flavors = new List<string>();
            flavors.Add("Chocolate");
            flavors.Add("Strawberry");
            flavors.Add("Vanilla");
            flavors.Add("Mocha");
            flavors.Add("Cookie Dough");
            System.Console.WriteLine(flavors.Count);
            flavors.RemoveAt(2);
            System.Console.WriteLine(flavors.Count);
            Dictionary<string,string> people = new Dictionary<string,string>();
            Random rand = new Random();
            foreach(string name in names)
            {
                people.Add(name, null);
            }
            List<string> keys = new List<string>(people.Keys);
            foreach(string key in keys)
            {
                people[key] = flavors[rand.Next(0,flavors.Count)];
                System.Console.WriteLine(people[key]);
            }
            foreach(var person in people)
            {
                System.Console.WriteLine(person.Key + " - " + person.Value);
            }
        }
    }
}
