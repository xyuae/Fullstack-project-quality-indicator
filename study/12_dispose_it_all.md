## Dispose it all
Twelve-Factor applications have to be built to be disposable. An application should be able to handle constantly being started and stopped at a moment's notice. Before we get too deep into this factor, let's talk a little about why disposability is so critical. One reason, that isn't often mentioned, but is very near and dear to my heart, is security.

It actually is a pattern in the security world to build processes and applications that have very short lives in order to minimize the impact of an application instance being compromised. Another reason disposability is so critical, is the scalability of an application. A process that starts fast and shuts down fast allows for an environment with auto-scalable application instances.

The benefit of such a model, is that under higher load, the container can add more instances dynamically, and then as load decreases, it can scale them back down. This allows you to serve the user needs without major slowdowns while also providing for reduced costs by preventing waste resources. Fianlly, this factor is imoprtant because crashes happen. By building your applications to be easily shut down and started up, it makes your overall system more fault tolerant.

So let's talk about how to achieve the promises of this factor. The first aspect of a disposable process is fast start up times. your application design needs to take into account everything that has to be done during start up, and focus on ways to make them happen as quickly as possible, often with parallel tasks. In addition, you need to focus on what isn't needed immediately when a process starts up, and move it out of the start up routine.

By moving these tasks to slightly later in the life cycle, your application can start listening for requests sooner. the second design aspect is handling shutdowns appropriately. Your application should be designed, that when a shutdown request comes in, it's handled gracefully. This can include refusing new connections to the application while it finishes processing existing ones. It can also include strong appropriate data to the data store or cache, so that other processes can pick that information up.

This graceful shutdown model should also e sued whenever possible in crash scenarios. Moving a legacy applicaiotn to cloud-native with this factor an be fairly straightforword.

In addition, you need to ensure you have really good error handling and crash protection, so that you can clean up your application, before it goes out of scope.
