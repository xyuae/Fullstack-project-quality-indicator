Node is very good at consuming data from different sources and transforming it for other applications. Let's put it this way. Node is the ideal platform to provide services of all kinds. Node.js is event-based. It uses an event loop taht applicatoin can load off asynchronous tasks to. The event loop takes care of compleitng the task while the application can proced processing equests. When the task is complete, the event loop pngs back the main applicaiton, then executes a callback function to proceed with the result. 

## Microservices
Until 20 to 30 years ago, architectures wee strictly monolithic, which means they consisted of one single application . If you want to modify code, you had to check out the whole application from your version control system, and then your change was ready to go into production, it was deployed iwht the whole application. Usually, these applications were also ran on a single server. The program logic tended to be very tighly coupled. This means, if you changed the method of functioning one file, there was a significant chance that your action would affect other parts of the applicaiton. This means that the developer had to have a model of the whole applicaiton in midn when doign any change. When a new developer started to work on something, she needed to first understand how everything was stitched together befroe wrtiing a single line of code. 

Around 2000, there was a paradigm shift. COmputer networks were quite common by then, and architects stated to cretae distributed applicaitons. So, they sliced the applicaitons into logical pieces called services taht exchanged the data over the network. This was called service-oriented architecture, or SOA. The communication between continents was mostly done by a XML.

Still, those logical pieces were quite large and unfortunately, often incorrectly used when some vendors eveloped proprietary ways to transparently call methods over the network, which basically introduced tight coupling again. Coming back to our shopping system example, in the SOAQ applicaiton, you would maybe decouple the display lgoic from the data excess providing methods to fetch all items or to place an order. Such systems were till tighly coupbled, but distributed,which made things rather worse than better. 

Around 2010 the term microservices was coined, while they have much in common with SOA, their aim was simplicity. There is no standard but the set of best practices apply Most importatnt, one microservice should only do one task, like fetching a customer from a backend. It hosuld be possible to devleop and deploy a microservice comletely independent from all other parts of an application. 
## Get
Use bodyparser middleware to access parameter in the url
```
app.get('/lions/:id', (req, res) => {
	var lion = _.find(lions, {id: req.params.id});
	res.json(lion || {});
});
```

## loadash library
Functions such as find, findIndex, assign is useful.
But the loadash library can be replaced.
```
var _ = require('lodash');
```
## middleware
Middleware is the backbone of Express. Express is really just a routing and middleware framework.
Middleware is a function with access to the request object, the response object, and the next() function that when called will go to the next middleware. Middleware can run any code, change the request and response objects, end the request-response cycle, and call the next middleware in the stack. If a middleware does not call next() or end the cycle, then the server will just hang.

There are five types of middleware.
There are third-party middleware, router-level middleware, application-level middleware, error-handling middleware, built in middleware.  

## Routers
With the release of Express 4.x, we can now have more than one router in our application. Think of a router as module with its own routing and middleware stack and functionality. This is great and allows more fine grained control over our resources. Also great for versioning our apis. Routers can setup routing and middleware the exact same way as we talked about with the app. The entire app from express() will still control global middleware and configuration and also setup routing for the other routers we make.
A good pattern is to define routes on the global routes on hte global app or a router and pass control to another router that has its own config.

Routers can set up routings.

## Testing
Testing is simple in node. Unit tests are very similar to how ou would test in the browser minus the DOM. Integration testing is where we start testing the actual api and what it does when we hit the routes.
A good practice is to export the app before staring in so our test can inspect it without having to start it. And so our test can start the server if it chooses with other options on configurations.

### TDD
TDD = TFD(Test First Development) + Refactoring
测试驱动开发是一种开发方法，是开发人员彩玉的活动。 其效果是易可执行的形势文档化你的需求，迫使你分清职责隔离依赖以驱动你的设计，编织安全网以便将bug扼杀在摇篮状态，防止其逃逸。测试人员需要参与特性验收条件的制定。
测试列表： 代码的功能点可能很多，并且需求可能是陆续出现的，任何阶段想添加功能时，应把相关功能点加到测试列表中，然后才能继续手头工作
测试驱动：利用测试来驱动开发，是tdd的核心
先写断言：编写测试代码时，应该首先编写判断代码功能的断言语句，然后编写必要的辅助语句。

### BDD
Behavior-driven development is a software development proces that emerged from test-driven development. Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared proess to collaborate on software development.
Although BDD is principlaly an idea about how software development should be managed by both business interests and technical insight, the practice of BDD does assume the use of specialized software tools to support the development process. Although these tools are often developed specifically for use in BDD projects, they can be seen as specialized forms of the tooling that supports test-driven development.

### IIFE (Immediately-invoked function expression)
In JavaScript, every function, when invoked, creates a new execution context. Because variables and functions defined within a function may only be accessed inside, but not outside, that context, invoking a function provides a very easy way to create privacy.

## Organization and config
Our api will consist of many different components to support the api, authentication, static serving, etc. But what makes up the api? The api is really just a collection of resources with models to define how the resources look, controllers to access to resources, and routes to let the controllers know how to run and to expose our api.

A model is just a blueprint of waht our resource may look like, just like the blueprints we make before in JSON above.

We can use process.env.NODE_ENV the variable to tell our applicaiton what environment its running in testing, development, or produciton. Depending on the envrionment, we can change things in our app like DB urls or toggle logging. We can also set and reference other env vars. Instead of searching everywhere for these values to change, we can and should create a central location for that config. Then depending on the NODE_ENV we can require another config file and merge the two together so our app can use it.

## Data modeling
We can use schemas in mongoose to add some structure and validations to our data. Mongo does not need schemas though. We also need some sort of relationships with our data. For example, users creating posts and posts having categories and belonging to users. Mongoose makes this simple.

## Cloud certifications
The new library for Hadoop, based on the open source apache Spark has been commericalized as a distribution called, Databricks, and because people want to process data via distributed Hadoop style processing not only on cloud, but they also want to be able to do taht using memory in the cloud that's Spart, so it's a lot faster. So, databricks is particularly hot in certain protocols like Adtech, Biotech. Protocols were a lot of data, huge volume so beyond terabyes, petabytes, and even exobytes of data so just really some of the top volumes in the world is being used by Sparks.

Really exciting time, its amount of data it can process but it requires very different technologies and deep understanding of how they actually work under the hood. So a lot of times, these companies require certification before they'll look at hiring you. In addition to that, there's one generic cloud certificaiton that's non-vendor specific that I htink is really valuable. It's called, the certificate of cloud security knowledge. As I mentioned earlier in this course, having proper security in the lcoud is an often overlooked area and i think it is just a hot career area in general and i've known a lot of network engieners that are really, interestly, find out that this is an opprtunity, so I wanted to include it.

Now just to round out this section of the course because I've talked about so many different clouds and so many different certifications, it might be a little difficult to say which ones going to be for me.

## IT pro
If your current job is an IT pro or a network administrator, you have a couple of options for a Cloud-based IT Pro job. Those are normally called cloud DevOps. So, this just seems to be a new type of terminology that reflects the fact taht the teams tend to be more integrated with developers and the network admins, literally working side by side, because someitmes the cloud services actually aren't available locally, so you have to actually dev and test on the Cloud.
So in terms of IT pro, there's two areas inteh Cloud that are most generally considered career path destinations. The first is Cloud Devops. The second is a cloud security expert.  

## Dev
Developers and DBAs are often involved in building of enterprise-level cloud data pipelines, which involves use of multiple types of databses, which can be relational, no sql, hadoop, or the newer data lakes. Developers and DBASs are sometimes also involved in working with or becoming cloud data scientiests. i've seen several DBA who are really interested in, or had actually a backgorund in, staticstic, taht when they made a career mvoe from managing databases on-premise to building data piplines and doing dta science, or predictive analysitc against them.

## Events
Many objects in Node emit events: a `fs.readStream` emits an event when the file is opened. All objects which emit evetns are instances of events.EventEmitter. You can access this module by doing: `require(events)`,

Typically, event names are represented by a camel-cased string, however, there aren't any strict restricitons on that, as any string will be accpted.
