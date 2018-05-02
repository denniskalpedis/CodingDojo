using System;
using System.Collections.Generic;

namespace BoxingUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            int total = 0;
            List<object> listofobjects = new List<object>();
            listofobjects.Add(7);
            listofobjects.Add(28);
            listofobjects.Add(-1);
            listofobjects.Add(true);
            listofobjects.Add("chair");
            foreach(var item in listofobjects)
            {
                System.Console.WriteLine(item);
                try{
                    total += (int)item;
                }
                catch (Exception ex)
                {}
            }
            System.Console.WriteLine(total);
        }
    }
}
