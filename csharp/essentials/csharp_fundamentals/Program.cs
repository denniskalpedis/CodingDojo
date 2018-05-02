using System;

namespace csharp_fundamentals
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
            for(int i = 1; i<=100; i++)
            {
                if((i % 3 == 0 && i % 5 != 0) || (i % 5 == 0 && i % 3 != 0))
                {
                    Console.WriteLine(i);
                }
            }
            for(int i = 1; i<=100; i++)
            {
                string printing = "";
                if(i % 3 == 0)
                {
                    printing += "Fizz";
                }
                if(i % 5 == 0)
                {
                    printing += "Buzz";
                }
                if(printing == "")
                {
                    Console.WriteLine(i);
                } else 
                {
                    Console.WriteLine(printing);
                }
                
            }
            for(int i = 1; i<=100; i++)
            {
                string printing = "";
                int remainder = i;
                while(remainder >= 0)
                {
                    if(remainder > 0)
                    {
                        remainder -= 3;
                    } else if(remainder == 0)
                    {
                        printing += "Fizz";
                        break;
                    }
                }  
                remainder = i;
                while(remainder >= 0)
                {
                    if(remainder > 0)
                    {
                        remainder -= 5;
                    } else if(remainder == 0)
                    {
                        printing += "Buzz";
                        break;
                    }
                }  
                if(printing == "")
                {
                    Console.WriteLine(i);
                } else 
                {
                    Console.WriteLine(printing);
                }
                
            }
        }
    }
}
