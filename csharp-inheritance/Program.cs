using System;

namespace csharp_inheritance
{


    class MyObject {

        public void theWidth(int myWidth)
        {
            width = myWidth;
        }

        public void theHeight(int myHeight)
        {
            height = myHeight;
        }

        protected int width;
        protected int height;
    }

    class Square : MyObject // makes square a subclass of myobject
    {
        public int area()
        {
            return (width * height);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            // creating new instace of square: mySquare
            Square mySquare = new Square();
            mySquare.theHeight(10);
            mySquare.theWidth(10);
            Console.WriteLine("My square has a value of: {0}", mySquare.area());
            Console.ReadKey();
        }
    }
}
