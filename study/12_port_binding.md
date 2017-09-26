## Port binding
In a 12-factor application, there is no separate container handling the requests and respondses for your
application. Your application needs to handle the protocols of communication, but when writing your application, you
don't know how it will be executed, so you would have to assume the defaults. To solve challenge of multiple processes in the same
OS container, running the same protocol, the 12-factor patterns use a strategy of port binding.

Each process has its communication protocols bound to a usually non-standard port, allowing it run in a container in an isolated fashion. One
of the first questions that might arise is how does a development team deal with all of this? And the answer is you don't. When in a development environment, you leverage some
form of manual port binding, either providing the port as an environment variable locally, or through a command line parameter.

Once in a deployment environment, however, your application is served its meessages through a routing
technology that handles the communications. Now, enabling port binding is often, once again, a framework, or pattern, to solve. As such, the migration of legacy applications to 12-factor
in this world may require some additional dependencies. Often, higher level languages will have frameworks that allow your application to manage the ports when needed.

Most of these options do rely on dependency injection type technologies and patterns. One of the cool parts of port binding is what you can do with it in a development situation, or in my case,
often a presentation environment. These benefits transition to the real world as well, so its usage isn't furtile. Let me walk through a simple scenario here. I am trying to explain in Java how to do cloud native applicatoin for another course.
In doing so, I am running multiple applications at once, some offering services that I write, some offering services that were written by third parties. Now, by leveraging port binding, I can run all of the applicaitons on my local system, and I have no need for VMs.
In addition, I can offer the services to applications that are also running, and this is where the real benefit comes in. Your services can become backing services for another application in the same framework, in the same operating system, because of hte port bindings.

Now, you can leverage the configuration of the producer application to advertise the port information of the consumer. Ultimately, you're letting the framework or the container handle the port binding so that you don't have to.
