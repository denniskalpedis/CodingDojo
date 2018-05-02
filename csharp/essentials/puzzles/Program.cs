using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        public static int[] randomarray()
        {
            Random rand = new Random();
            int[] arr = new int[10];
            int max = 0;
            int min = 25;
            int sum = 0;
            for (int idx = 0; idx < arr.Length; idx++)
            {
                arr[idx] = rand.Next(5,25);
                sum += arr[idx];
                if (arr[idx] > max)
                {
                    max = arr[idx];
                }
                if (arr[idx] < min)
                {
                    min = arr[idx];
                }
            }
            System.Console.WriteLine("Minimum value is {0}, Maximum is {1} and sum of all values is {2}", min, max, sum);
            return arr;

        }
        public static string TossCoin()
        {
            string outcome;
            System.Console.WriteLine("Tossing a Coin!");
            Random rand = new Random();
            if (Convert.ToBoolean(rand.Next(2)))
            {
                outcome = "Heads!";
            } else 
            {
                outcome = "Tails!";
            }
            System.Console.WriteLine(outcome);
            return outcome;
        }
        public static double TossMultipleCoins(int num)
        {
            double odds = 0;
            Dictionary<string,int> winner = new Dictionary<string,int>();
            int tempint = 0;
            string tempstring;
            for(int i = 0; i <= num; i++)
            {
                tempstring = TossCoin();
                if (winner.ContainsKey(tempstring))
                {
                    tempint = winner[tempstring];
                    winner.Remove(tempstring);
                }
                winner.Add(tempstring, tempint+1);
            }
            odds = (Convert.ToDouble(winner["Heads!"]) / Convert.ToDouble(num)) * 100;
            return odds;
        }
        public static string[] ShuffleNames(string[] arr)
        {
            Random rand = new Random();
            for (int i = arr.Length -1; i > 0; i--)
            {
                int n = rand.Next(i+1);
                string temp = arr[i];
                arr[i] = arr[n];
                arr[n] = temp;
            }
            var newResults = new List<string>();
            foreach (string item in arr)
            {
                if (item.Length > 5)
                {
                    newResults.Add(item);
                    System.Console.WriteLine(item);
                }
            }
            arr = newResults.ToArray();
            return arr;
        }
        static void Main(string[] args)
        {
            randomarray();
            TossCoin();
            System.Console.WriteLine("Heads came up {0}% of the time.",TossMultipleCoins(50));
            string[] names = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            ShuffleNames(names);
        }
    }
}
