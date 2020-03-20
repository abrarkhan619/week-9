using System;

namespace csharp_polymorphism
{
    class Program
    {

        void polyPrint(int myInteger)
        {
            Console.WriteLine("My integer is: {0}", myInteger);
        }

        void polyPrint(double myDouble)
        {
            Console.WriteLine("My integer is: {0}", myDouble);
        }

        void polyPrint(string myString)
        {
            Console.WriteLine("My integer is: {0}", myString);
        }

        void withdrawl(int bankBalance, int withdrawlAmaount)
        {
            bankBalance -= withdrawlAmaount;
            Console.WriteLine("My new balance is: {0}", bankBalance);
        }

        static void Main(string[] args)
        {
            Program myPoly = new Program();

            myPoly.polyPrint(50000);
            myPoly.polyPrint("Hello World!");
            myPoly.polyPrint(10.5);
            Console.ReadKey();

            myPoly.withdrawl(500, 30);

            // Console.WriteLine("Hello World!");
        }
    }
}
