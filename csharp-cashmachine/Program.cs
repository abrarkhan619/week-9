using System;

namespace csharp_cashmachine
{
    class Program
    {

        void withdrawl(int bankBalance, int withdrawlAmaount)
        {
            bankBalance -= withdrawlAmaount;
            Console.WriteLine("My new balance is: {0}", bankBalance);
        }

        void checkPin()
        {
        START:
            string pinNumber = "1000";
            string userInput;
            Console.Write("Please enter your input: ");
            userInput = Console.ReadLine();
            Console.WriteLine(userInput);

            if (userInput == pinNumber)
            {
                Console.WriteLine("Pin number is correct!");
            }
            else
            {
                Console.WriteLine("Incorrect pin number");
                goto START;
            }
        }

        static void Main(string[] args)
        {
            Program cashMachine = new Program();

            cashMachine.checkPin();
            cashMachine.withdrawl(500, 30);

        }
    }
}
