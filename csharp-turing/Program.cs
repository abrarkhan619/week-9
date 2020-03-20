using System;

namespace csharp_turing
{
    
    class Room {

        public double height;
        public double length;
        public double width;
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            // declared room1 and room2 to be instances of the room class
            Room Room1 = new Room();
            Room Room2 = new Room();
            double total = 0.0;
            String name = "John";

            // room1 detials
            Room1.height = 5.0;
            Room1.length = 20.0;
            Room1.width = 40.9;

            // room2 detials
            Room2.height = 30.3;
            Room2.length = 12.6;
            Room2.width = 26.8;

            total = Room1.height + Room1.length + Room1.width;
            Console.WriteLine("The total is: {0} and my name is {1}", total, name);
            // Console.WriteLine("The total is: " + total + ".");
            if (name == "John") {
                Console.WriteLine("Hello {0}", name);
            }
            Console.ReadKey();

            Console.WriteLine("Hello World!");
        }
    }
}
