using System;
using System.Collections.Generic;


namespace Basic_13
{
    class Program
    {
        public static int greaterThanY(int[] arr, int y)
        {
            int count = 0;
            foreach(int num in arr)
            {
                if(num > y)
                {
                    count ++;
                }
            }
            return count;
        }

        public static List<int> square(List<int> arr)
        {
            List<int> newList = new List<int>();
            foreach(int number in arr)
            {
                newList.Add(number * number);
            }
            return newList;
        }

        public static List<int> removenegatives(List<int> arr)
        {
            List<int> newList = new List<int>();
            foreach(int number in arr)
            {
                if(number >= 0)
                {
                    newList.Add(number);
                } else
                {
                    newList.Add(0);
                }
            }
            return newList;
        }

        public static List<string> replacenegatives(List<string> arr)
        {
            List<string> newList = new List<string>();
            foreach(string number in arr)
            {
                if(Int32.Parse(number) < 0)
                {
                    newList.Add("dojo");
                } else
                {
                    newList.Add(number);
                }
            }
            return newList;
        }

        public static List<int> shiftarray(List<int> arr)
        {
            List<int> newList = new List<int>();
            for(var i = 1; i < arr.Count; i++)
            {
                newList.Add(arr[i]);
            }
            newList.Add(0);
            return newList;
        }

        public static void minmaxaverage(List<int> arr)
        {
            List<int> newList = arr;
            int min = newList[0];
            int max = newList[0];
            double average = 0;
            foreach(int number in arr)
            {
                average += number;
                if(number > max)
                {
                    max = number;
                } 
                else if(number < min)
                {
                    min = number;
                }
            }
            System.Console.WriteLine("Min is {0}, Max is {1}, Average is {2}",min, max, average/newList.Count);;
        }

        static void Main(string[] args)
        {
            System.Console.WriteLine("Print 1-255!");
            for(int i = 1; i <= 255; i++)
            {
                System.Console.WriteLine(i);
            }
            System.Console.WriteLine("Print Odd Numbers Between 1-255!");
            for(int i = 1; i <= 255; i = i + 2)
            {
                System.Console.WriteLine(i);
            }
            System.Console.WriteLine("Print Sum!");
            int sum = 0;
            for(int i = 0; i <= 255; i++)
            {
                sum += i;
                System.Console.WriteLine("New Number: {0} Sum: {1}",i,sum);
            }
            System.Console.WriteLine("Iterating Throug an Array!");
            int[] x = {1,3,5,7,9,13};
            foreach(int number in x)
            {
                System.Console.WriteLine(number);
            }
            System.Console.WriteLine("Find Max!");
            int[] y = {-3, -5, -7, 0, 2};
            int max = y[0];
            foreach(int number in y)
            {
                if(max < number)
                {
                    max = number;
                }
            }
            System.Console.WriteLine(max);
            System.Console.WriteLine("Get Average!");
            int total = 0;
            foreach (int number in x)
            {
                total += number;
            }
            System.Console.WriteLine(total/x.Length);
            System.Console.WriteLine("Array (LIST) with Odd Numbers!");
            List<int> oddnumbers = new List<int>();
            for(int i = 1; i <= 255; i = i + 2)
            {
                oddnumbers.Add(i);
            }
            System.Console.WriteLine(oddnumbers);
            System.Console.WriteLine("Greater Than Y!");
            System.Console.WriteLine(greaterThanY(x, 5));
            System.Console.WriteLine("Square the Values!");
            List<int> intlist = new List<int>();
            intlist.Add(1);
            intlist.Add(5);
            intlist.Add(10);
            intlist.Add(-2);
            intlist = square(intlist);
            foreach(int number in intlist)
            {
                System.Console.WriteLine(number);
            }
            System.Console.WriteLine("Remove Negative Numbers!");
            List<int> z = new List<int>();
            z.Add(1);
            z.Add(5);
            z.Add(10);
            z.Add(-2);
            z = removenegatives(z);
            foreach(int number in z)
            {
                System.Console.WriteLine(number);
            }
            System.Console.WriteLine("Print Min Max and Average!");
            List<int> a = new List<int>();
            a.Add(1);
            a.Add(5);
            a.Add(10);
            a.Add(-2);
            minmaxaverage(a);
            System.Console.WriteLine("Shift Array!");
            List<int> b = new List<int>();
            b.Add(1);
            b.Add(5);
            b.Add(10);
            b.Add(7);
            b.Add(-2);
            b = shiftarray(b);
            foreach(int number in b)
            {
                System.Console.WriteLine(number);
            }
            System.Console.WriteLine("Replace Negatives with String!");
            List<string> c = new List<string>();
            c.Add("-1");
            c.Add("-3");
            c.Add("2");
            c = replacenegatives(c);
            foreach(string number in c)
            {
                System.Console.WriteLine(number);
            }
        }

    }
}
