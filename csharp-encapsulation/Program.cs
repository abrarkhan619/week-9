using System;

namespace csharp_encapsulation
{
    class AreaClass
    {
        public double width;
        public double length;
        public double age = 44.0;
        public string userInput;

        private double Area()
        {
            return width * length;
        }

        public double myFunction()
        {
            return length + width;
        }

        public void InformationDisplayed()
        {
            Console.WriteLine("Width = {0}", width);
            Console.WriteLine("Length = {0}", length);
            Console.WriteLine("What did it say? {0}", myFunction());
            Console.WriteLine("Our area is {0}", Area());
        }

        public void UserDetails()
        {

            double myDouble = 44.0;
            int myInt = 44;
            bool myBool = true;

            Console.WriteLine(Convert.ToString(myInt));
            Console.WriteLine(Convert.ToString(myDouble));
            Console.WriteLine(Convert.ToString(myBool));
            // Console.WriteLine(Convert.ToInt16(myDouble));

            Console.WriteLine("Please enter your user details: ");
            userInput = Console.ReadLine();
            if (Convert.ToDouble(userInput) == age) {
                Console.WriteLine("It matches!");
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            AreaClass myShape = new AreaClass();
            myShape.width = 12.94;
            myShape.length = 6.87;
            myShape.InformationDisplayed();
            myShape.UserDetails();
            Console.ReadKey();
        }
    }
}
