## 12 factor application - concurrency

Concurrency is challenge in the legacy monolithic world, and I would like to start talking about his factor
from that perspective. Let's consider the most basic use case for concurrency in this space, increased demand. Imagine for a moment
you have a traditional application and are seeing an increased load on a single API. Now you can either increase the horsepower
to the entire system or spawn a new instance of your entire application, which in the legacy case, includes everything that your application exposes.

I hope you immediately see the wasteful nature of solving the issue in this manner. This, of course, assuems that you an even increase
the application instances or horsepower without choking other processes. This can quickly get out of hand. Enter the concurrency model of the modern day
12 factor application. We've addressed a need to break all of these services into unique applications and have them run as distinct processes.

So you may be questioning what's left. This factor states simply that you would achieve the various forms of concurrency by spawning additional instances of your appication processes.
If you have a web application that is under load, add more instances of it. If you have increased messaging on an asynchronous message queue. spawn more listener processes. If you need to expose a service in another
global region, add that process to your remote data center.

There are a multitude of problems that you can solve with this model. One thing to take note of with this factor is the concept of scale. In a traditional environment we can perform vertical
scaling which quickly hits the law of diminishing returns. If you are not familiar with the process of scale in application development, take a simple worker that reads from input and writes to the database.
Put sufficient load on the system to see some taxation, and then create a new instance of that process on the same machine. Eventually, you will get to a point where adding processes has a negative performance effect.
To solve this problem, you execute a horizontal scale to another virtual machine or physical machine. Now the appicaiotns aren't taking the hit themselves. Granted, your database server may take a hit.

Concurrency in the 12 factor isn't just about applications. Backing services are just as important. you may actually find that this is the hardest problem to solve. Always take into account the ability to scale both your
applications and their backing services, especially when dealing with global distribution.  
