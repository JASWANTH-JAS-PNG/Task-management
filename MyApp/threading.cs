using System;
using System.Threading;

class program
{
    
    static void task1()
    {
        console.writeline("task 1 started");
        thread.sleep(2000);
    }


    static void task2()
    {
        console.writeline("task 2 started");
        thread.sleep(1000);
    }


    static void Main()
    {
        thread t1 = new thread(task1);
        thread t2 = new thread(task2);

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        console.writeline("both tasks completed");
    }
}